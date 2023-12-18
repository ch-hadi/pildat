import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
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
import  Api from './../../utils/Api'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Full Name', alignRight: false },
  { id: 'login-email', label: 'Login ID/Email', alignRight: false },
  { id: 'phone', label: 'Phone #', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'admin-type', label: 'Admin Type', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
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
    return filter(array, (_user) => _user.full_name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Admin() {

  const [loading,setLoading] = useState(false);

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [addAdmin, setAddAdmin] = useState(false);

  const [editAdmin, setEditAdmin] = useState(false);

  const [Users, setUsers] = useState([]);

  const [UserType, setUserType] = useState(false);

  const [editData, setEditData] = useState('');

  const handleOpenMenu = (event) => {
    // setEditAdmin(true);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Users.length) : 0;
  const filteredUsers = applySortFilter(Users, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const handleaddAdmin = () => {
    setAddAdmin(true);
  };

  const handleEdit =(row)=>{
    setEditAdmin(true)
      setEditData(row)
  }
  const getData = ()=>{
    setLoading(true)
    Api.get('/admin/users').then((res)=>{
     setUsers(res.data.data)
    })
    Api.get('/admin/admin-type').then((res)=>{
      setUserType(res.data.data)
     })
     setLoading(false)
  }
  useEffect(()=>{
     getData()
  },[])

  const handleDelete=(id)=>{
    setLoading(true)
    Api.delete(`/admin/user/${id}`).then((res)=>{
      if(res.data.success){
        getData()
      }
     })
     setLoading(false)
  }


  return (
    <>
      <Helmet>
        <title> Admin </title>
      </Helmet>

      <Container>
        {addAdmin && <CModel filter="add-admin" open={addAdmin} setOpen={setAddAdmin} recall={getData}/>}
        {editAdmin && <CModel filter="edit-admin" open={editAdmin} setOpen={setEditAdmin} data={editData} recall={getData}/>}
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Admin Management
          </Typography>
          <Button onClick={handleaddAdmin} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Admin
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
                  rowCount={Users.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { user_id, full_name, status,login_id,email,admin_type_id,phone } = row;
                    const selectedUser = selected.indexOf(full_name) !== -1;

                    return (
                      <TableRow hover key={user_id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        {/* <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell> */}
                        <TableCell component="th" scope="row">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={full_name} src={full_name[0]} />
                            <Typography variant="subtitle2" noWrap>
                              {full_name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{login_id}</TableCell>
                        <TableCell>{phone}</TableCell>
                        <TableCell >{email}</TableCell>
                        <TableCell >{UserType && UserType.map((item)=>item.admin_type_id==admin_type_id && item.admin_type_name)}</TableCell>
                        <TableCell align="left">
                          <Label color={(status ==0? 'error':'success')}>{sentenceCase(status==0?'In Active':'Active')}</Label>
                        </TableCell>
                        <TableCell>
                          <IconButton size="large" color="inherit" onClick={(e) => handleEdit(row)}>
                            <Iconify icon={'eva:edit-fill'} />
                          </IconButton>
                          <IconButton size="large" color="inherit" onClick={() => {handleDelete(user_id)}}>
                            <Iconify color='red' icon={'eva:trash-2-outline'} />
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
    </>
  );
}

// export default VenueList;
