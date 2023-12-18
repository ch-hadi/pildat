import React, { useState } from 'react';
import CTextField from '../../CTextField/CTextField';
import CButton from '../../CButton/CButton';
import { Box } from '@mui/material';
import CSelect from '../../CSelect/CSelect';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const EditEmployer = () => {
  // const classes = useMyTheme();
  const [Data, setAddAdminData] = useState({
    full_name: '',
    login_email_id: '',
    password: '',
    c_password: '',
    email: '',
  });
  const [selectedStatus, setSelectedStatus] = useState('');
  const handleAdd = () => {
    console.log('added');
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Update Employer</p>
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
        <CTextField name="employer_name" full={true} label="Employer Name" margin="10px 0px" width="100%" />
        <CTextField name="company_name" full={true} label="Company Name" margin="10px 0px" width="100%" />
        <CTextField name="address" full={true} label="Address" margin="10px 0px" width="100%" />
        <CTextField name="contact" full={true} label="Contact" margin="10px 0px" width="100%" />
        <CTextField name="website" full={true} label="Wwebsite" margin="10px 0px" width="100%" />
        <CTextField name="email" full={true} label="Email" margin="10px 0px" width="100%" />  
        {/* <CTextField name="position_name" full={true} label="Party Alliance Short Name" margin="10px 0px" width="100%" /> */}
        <CSelect
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

export default EditEmployer;

const statusData = [
    {
      name: 'Active',
      value: 0,
    },
    {
      name: 'Inactive',
      value: 1,
    },
    
  ];