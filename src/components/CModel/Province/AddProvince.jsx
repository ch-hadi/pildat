import React, { useState } from 'react';
import CTextField from '../../CTextField/CTextField';
import CButton from '../../CButton/CButton';
import { Box } from '@mui/material';
import CSelect from '../../CSelect/CSelect';
import Api from '../../../utils/Api';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const AddProvince = (props) => {
  // console.log(props)
  // const classes = useMyTheme();
  const [Data, setAddCountryData] = useState({
    province_name: '',
  });
  const [selectedStatus, setSelectedStatus] = useState('');
  const [countries, setCountries]= useState([]);
  const [country_id,setCountry_id]= useState('');
  
  const onChangeHandler =(e)=>{
    const {name , value} = e.target;
    setAddCountryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleAdd = () => {
    let status = selectedStatus;
    let finalData = {...Data,country_id,status}
    Api.post(`/provinces/`,finalData).then((res)=>{
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Add Province</p>
      </div>
      <div
        style={{
          marginTop: 10,
          width: '94%',
          display: 'flex',
          flexDirection:'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CTextField  onChange={onChangeHandler} name="province_name" full={true} label="Province Name" margin="10px 0px" width="100%" />
        <CSelect
          margin='10px 0px'
          width="100%"
          label="Country*"
          data={ props.countries && props.countries.map((c) => ({
            name: c.country_name,
            value: c.id,
          }))}
          value={country_id}
          setValue={setCountry_id}
        />
        <CSelect
         margin='0px'
          width="100%"
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
            onClick={()=>props.setOpen(false)}
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

export default AddProvince;

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