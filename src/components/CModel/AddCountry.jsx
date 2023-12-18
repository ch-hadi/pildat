import React, { useState } from 'react';
import CTextField from '../CTextField/CTextField';
import CButton from '../CButton/CButton';
import { Box } from '@mui/material';
import CSelect from '../CSelect/CSelect';
import Api from '../../utils/Api';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const AddCountry = (props) => {
  // const classes = useMyTheme();
  const [Data, setAddAdminData] = useState({
    country_name:'',
    alpha2: '',
    alpha3:'', 
    un_code: '',
    digital_code:'',
  });
  const [selectedStatus, setSelectedStatus] = useState('');

  const onChangeHandler =(e)=>{
    const {name , value} = e.target;
    setAddAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleAdd = () => {
    let status = selectedStatus;
    let finalData = {...Data,status}
    Api.post(`/countries/`,finalData).then((res)=>{
      if(res.data.success){
        props.recall();
        props.setOpen(false);
      }
    })
  };

  return (
    <div
      style={{
        width: '100%',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          borderRadius: 4,
          width: '95%',
          textAlign: 'center',
          background: '#2065D1',
          boxshadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          color: 'white',
          fontWeight: '700',
          marginTop: 5,
          padding: '10px 0px',
        }}
      >
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Add Country</p>
      </div>
      <div
        style={{
          marginTop: 10,
          width: '94%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CTextField  onChange={onChangeHandler} name="country_name" full={true} label="Country Name" margin="10px 0px" width="48%" />
        <CTextField  onChange={onChangeHandler} name="alpha2" full={true} label="Alpha 2" margin="10px 0px" width="48%" />
        <CTextField  onChange={onChangeHandler} name="alpha3" type='password' full={true} label="Alpha 3" margin="10px 0px" width="48%" />
        <CTextField  onChange={onChangeHandler} name="un_code" type='password' full={true} label="Un Code" margin="10px 0px" width="48%" />
        <CTextField  onChange={onChangeHandler}
          name="digital_code"
          full={true}
          label="Digital Code"
          margin="10px 0px"
          width="48%"
          type="email"
        />
        <CSelect
          width="48%"
          label="Status*"
          data={statusData}
          value={selectedStatus}
          setValue={setSelectedStatus}
        />
        <Box sx={{ textAlign: 'end', width: '100%' }}>
          <hr style={{ opacity: '25%' }} />
          <CButton
            background="#2065D1"
            color="white"
            width="10%"
            ariant="contained"
            onClick={handleAdd}
            label="Cancel"
          />
          <CButton
            margin="0px 10px"
            background="#2065D1"
            color="white"
            width="10%"
            ariant="contained"
            onClick={handleAdd}
            label="Submit"
          />
        </Box>
      </div>
    </div>
  );
};

export default AddCountry;

const statusData = [
  {
    name: 'Active',
    value: 1,
  },
  {
    name: 'Inactive',
    value: 0,
  },
  
];