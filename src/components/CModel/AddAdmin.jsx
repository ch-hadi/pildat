import React, { useState } from 'react';
import CTextField from '../CTextField/CTextField';
import CSelect from '../CSelect/CSelect';
import CButton from '../CButton/CButton';
import CustomInput from '../CTextField/CustomInput';
import CountrySelector from '../countryList/CountrySelector ';
import GoogleLocationField from '../GoogleLocationField/GoogleLocationField';
import CTimePicker from '../CTimePicker/CTimePicker';
import { Box } from '@mui/material';
import Api from '../../utils/Api';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const AddAdmin = (props) => {
  // const classes = useMyTheme();
  const [Data, setAddAdminData] = useState({
    full_name:'',
    login_id:'',
    password:'',
    c_password:'',
    email:'',
    phone:'',
  });

  const [selectedProfile, setSelectedProfile] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const onChangeHandler =(e)=>{
    const {name , value} = e.target;
    setAddAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleAdd = () => {
      let admin_type_id = selectedProfile;
      let status = selectedStatus;
      let finalData = {...Data,admin_type_id,status}
      Api.post("/admin/register",finalData).then((res)=>{
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Add Admin</p>
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
        <CTextField onChange={onChangeHandler} name="full_name" full={true} label="Full Name" margin="10px 0px" width="48%" />
        <CTextField onChange={onChangeHandler} disabled={false}  name="login_id" full={true} label="Login ID/Email" margin="10px 0px" width="48%" />
        <CTextField onChange={onChangeHandler} 
         
          name="email"
          full={true}
          label="Email"
          margin="10px 0px"
          width="48%"
          type="email"
        />
         <CTextField onChange={onChangeHandler} 
          name="phone"
          full={true}
          label="Phone"
          margin="10px 0px"
          width="48%"
          type="phone"
        />
        <CTextField onChange={onChangeHandler} name="password" type='password' full={true} label="Password" margin="10px 0px" width="48%" />
        <CTextField onChange={onChangeHandler} name="c_password" type='password' full={true} label="Confirm Password" margin="10px 0px" width="48%" />
        <CSelect
          width="48%"
          margin='10px 0px'
          label="User Type*"
          data={userData}
          value={selectedProfile}
          setValue={setSelectedProfile}
        />
        <CSelect
          width="48%"
          margin='10px 0px'
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

export default AddAdmin;

const userData = [
  {
    name: 'Administrator',
    value: 1,
  },
  {
    name: 'User',
    value: 2,
  },
  {
    name: 'Visitor',
    value: 3,
  },
  {
    name: 'Verifier',
    value: 4,
  },
  {
    name: 'President',
    value: 5,
  },
];

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
