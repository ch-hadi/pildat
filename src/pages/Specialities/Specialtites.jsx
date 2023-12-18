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
  TableRow,
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
import Api from '../../utils/Api';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'sr', label: 'Sr #', alignRight: false },
  { id: 'speciality-name', label: 'Speciality Name', alignRight: false },
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
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Specialities() {

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [addSpecialities, setAddSpecialities] = useState(false);

  const [editSpecialitiesData, setEditSpecialities] = useState(false);

  const [editData, setEditData] = useState('');
  const [specialities, setSpecialities]=useState([]);
  const [loading ,setLoading]=useState(false)

  const handleOpenMenu = (event) => {
    // setEditSpecialities(true);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - specialities.length) : 0;

  const filteredUsers = applySortFilter(specialities, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;
 console.log(isNotFound)
  const handleAddSpecialities = () => {
    setAddSpecialities(true);
  };

  const handleEdit =(row)=>{
    setEditSpecialities(true)
    setEditData(row)
}
  const getData = ()=>{
    setLoading(true)
    Api.get('/specialities').then((res)=>{
     setSpecialities(res.data.data)
    })
     setLoading(false)
  }
  useEffect(()=>{
     getData()
  },[])

  const handleDelete=(id)=>{
    setLoading(true)
    Api.delete(`/specialities/${id}`).then((res)=>{
      if(res.data.success){
        getData()
      }
     })
     setLoading(false)
  }

  return (
    <>
      <Helmet>
        <title> Specialities </title>
      </Helmet>

      <Container>
        {addSpecialities && <CModel filter="add-speciality" width='40%' open={addSpecialities} setOpen={setAddSpecialities} recall={getData}  />}
        {editSpecialitiesData && <CModel filter="edit-speciality" width='40%' open={editSpecialitiesData} setOpen={setEditSpecialities} data={editData} recall={getData} />}
       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Specialities Management
          </Typography>
          <Button onClick={handleAddSpecialities} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Speciality
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
                  rowCount={specialities.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                    const { id, speciality_name, status, } = row;
                    const selectedUser = selected.indexOf(speciality_name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell component="th" scope="row">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              {speciality_name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">
                        <Label color={(status ==0? 'error':'success')}>{sentenceCase(status==0?'In Active':'Active')}</Label>
                        </TableCell>
                        <TableCell>
                          <IconButton size="large" color="inherit" onClick={(e) => handleEdit(row)}>
                            <Iconify icon={'eva:edit-fill'} />
                          </IconButton>
                          <IconButton size="large" color="inherit" onClick={() => {handleDelete(id)}}>
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
            count={specialities.length}
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
