import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
import CModel from '../../components/CModel/CModel';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
// mock
import USERLIST from '../../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Venue Name', alignRight: false },
  { id: 'venuecategory', label: 'Venue Category', alignRight: false },
  { id: 'venueremark', label: 'Venue Remark', alignRight: false },
  { id: 'venueaddress', label: 'Venue Address', alignRight: false },
  { id: 'phonenumber', label: 'Phone Number', alignRight: false },
  { id: 'commissionratio', label: 'Commission Ratio', alignRight: false },
  { id: 'venuearea', label: 'Venue Area', alignRight: false },
  { id: 'businesshour', label: 'Business Hours', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'venuecontact', label: 'Venue Contact', alignRight: false },
  { id: 'creationtime', label: 'Creation Time', alignRight: false },
  { id: 'actions', label: 'Actions', alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function VenueList() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [addVenue, setAddVenue] = useState(false);

  const [editVenue, setEditVenue] = useState(false);

  const [myDevices, setMyDevices] = useState(false);

  const [operationLog, setOperationLog] = useState(false);

  const [orderList, setOrderList] = useState(false);
  const [editData, setEditData] = useState('');

  const handleOpenMenu = (event) => {
    // setEditVenue(true);
    setEditData(event.row);
    setOpen(event.e.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const handleaddVenue = () => {
    setAddVenue(true);
  };

  return (
    <>
      <Helmet>
        <title> User </title>
      </Helmet>

      <Container>
        {addVenue && <CModel filter="add-venue" open={addVenue} setOpen={setAddVenue} />}
        {editVenue && <CModel filter="edit-venue" open={editVenue} setOpen={setEditVenue} data={editData} />}
        {myDevices && <CModel filter="venue_myDevices" open={myDevices} setOpen={setMyDevices} data={editData} />}
        {operationLog && (
          <CModel filter="venue_operation_log" open={operationLog} setOpen={setOperationLog} data={editData} />
        )}
        {orderList && <CModel filter="venue_order_list" open={orderList} setOpen={setOrderList} data={editData} />}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Venues
          </Typography>
          <Button onClick={handleaddVenue} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Venue
          </Button>
        </Stack>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        {/* <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell> */}
                        <TableCell component="th" scope="row">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">Category{id.split('-')[0]}</TableCell>
                        <TableCell align="left">Remark {role}</TableCell>
                        <TableCell align="center">Web Seo Wiz®️</TableCell>
                        <TableCell align="center">1923434234</TableCell>
                        <TableCell align="center">{Math.random(2).toFixed(2)}%</TableCell>
                        <TableCell align="center">{Math.random(2).toFixed(2)}</TableCell>
                        <TableCell align="center">09:00:00-23:00:00</TableCell>
                        <TableCell align="left">
                          <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell>
                        <TableCell align="center">{Math.random(2).toFixed(0)}</TableCell>
                        <TableCell align="center">2023-09-08 08:37:13</TableCell>
                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={(e) => handleOpenMenu({ e, row })}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 160,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setEditVenue(true);
            setOpen(null);
          }}
        >
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            setMyDevices(true);
            setOpen(null);
          }}
        >
          <Iconify icon={'tabler:device-mobile'} sx={{ mr: 2 }} />
          My Device
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOrderList(true);
            setOpen(null);
          }}
        >
          <Iconify icon={'eva:shopping-cart-outline'} sx={{ mr: 2 }} />
          Order List
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOperationLog(true);
            setOpen(null);
          }}
        >
          <Iconify icon={'eva:file-text-outline'} sx={{ mr: 2 }} />
          Operation Log
        </MenuItem>
        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'tabler:device-mobile-x'} sx={{ mr: 2 }} />
          Disable
        </MenuItem>
      </Popover>
    </>
  );
}

// export default VenueList;
