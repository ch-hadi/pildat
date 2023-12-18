import React, { useState } from 'react';
import CTextField from '../CTextField/CTextField';
import CSelect from '../CSelect/CSelect';
import CButton from '../CButton/CButton';

const AddUser = () => {
  const [selectedProfile, setSelectedProfile] = useState('');
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Add User</p>
      </div>
      <div style={{ marginTop: 10, width: '94%' }}>
        <CSelect
          label="Select your profile type"
          data={userData}
          value={selectedProfile}
          setValue={setSelectedProfile}
        />
        <CTextField full={true} label="First Name" margin="10px 0px" width="100%" />
        <CTextField full={true} label="Last  Name" margin="10px 0px" width="100%" />
        <CTextField full={true} label="Email" margin="10px 0px" width="100%" />
        <CTextField full={true} label="Phone" margin="10px 0px" width="100%" />
        <CButton
          background="#2065D1"
          color="white"
          width="100%"
          ariant="contained"
          onClick={handleAdd}
          label="Submit"
        />
      </div>
    </div>
  );
};

export default AddUser;
const userData = [
  {
    name: 'Business Profile',
    value: 'business_profile',
  },
  {
    name: 'Personal Profile',
    value: 'personal_profile',
  },
  {
    name: 'Instagram Profile',
    value: 'instagram_profile',
  },
  {
    name: 'LinkedIn Profile',
    value: 'linkedin_profile',
  },
  {
    name: 'Youtube Profile',
    value: 'youtube_profile',
  },
  {
    name: 'Spotify Profile',
    value: 'spotify_profile',
  },
];
