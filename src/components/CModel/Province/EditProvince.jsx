import React, { useState } from 'react';
import CTextField from '../../CTextField/CTextField';
import CButton from '../../CButton/CButton';
import { Box } from '@mui/material';
import CSelect from '../../CSelect/CSelect';
import Api from '../../../utils/Api';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const EditProvince = (props) => {
  console.log(props)
  // const classes = useMyTheme()
  const [Data, setAddProvinceData] = useState({
    province_name: props.data.province_name,
  });

  const [selectedStatus, setSelectedStatus] = useState(props.data.status);
  const [countries, setCountries]= useState([]);
  const [country_id,setCountry_id]= useState(props.data.country_id);

  const countriesData = props.countries && props.countries.map((c) => ({
            name: c.country_name,
            value: c.id,
          }))
  const onChangeHandler =(e)=>{
    const {name , value} = e.target;
    setAddProvinceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleAdd = () => {
    let status = selectedStatus;
    let finalData = {...Data,status,country_id}
    Api.put(`/provinces/${props.data.id}`,finalData).then((res)=>{
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Update Province</p>
      </div>
      <div
        style={{
          marginTop: 10,
          width: '94%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection:'column'
        }}
      >
        <CTextField onChange={onChangeHandler} name="province_name" defaultValue={Data.province_name} full={true} label="Province Name" margin="10px 0px" width="100%" />
        <CSelect
          width="100%"
          label="Country*"
          data={countriesData}
          value={country_id}
          setValue={setCountry_id}
        />
        <CSelect
          margin='10px 0px'
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

export default EditProvince;

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