import React, { useState } from 'react';
import CTextField from '../../CTextField/CTextField';
import CButton from '../../CButton/CButton';
import { Box } from '@mui/material';
import CSelect from '../../CSelect/CSelect';
import Api from '../../../utils/Api';
import CAlert from '../../CAlert/CAlert';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const AddCapacityBuilding = (props) => {
  // const classes = useMyTheme();
  const [Data, setAddCapacityData] = useState({
    capacity_building_name:""
  });
  const [error,setError] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('');
  const [message,setMessage] = useState(null)
  const onChangeHandler =(e)=>{
    const {name , value} = e.target;
    setAddCapacityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const alertMessage = <div style={{margin:'10px 0px'}}><CAlert text={message && message} type='error'/></div>

  const handleAdd = () => {
    let status = selectedStatus;
    let finalData = {...Data,status}
    Api.post(`/capacity_building/`,finalData).then((res)=>{
      if(res.data.success){
        props.recall();
        props.setOpen(false);
        return
      }
      if(!res.data.success){
        setError(true)
        setMessage(res.data.message)
        setTimeout(()=>{
         setError(false)
        },2000)
        return
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Add Capacity Building</p>
      </div>
      <div
        style={{
          marginTop: 10,
          width: '94%',
          // display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CTextField onChange={onChangeHandler} name="capacity_building_name" full={true} label="Capacity Building Name" margin="10px 0px" width="100%" />
        <CSelect
          width="48%"
          label="Status*"
          data={statusData}
          value={selectedStatus}
          setValue={setSelectedStatus}
        />
        <Box sx={{ textAlign: 'end', width: '100%' }}>
          <hr style={{ opacity: '25%' }} />
          {error && alertMessage}
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

export default AddCapacityBuilding;

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