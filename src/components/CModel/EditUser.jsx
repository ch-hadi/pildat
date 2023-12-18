import React, { useState } from 'react';
import CTextField from '../CTextField/CTextField';
import CSelect from '../CSelect/CSelect';
import CButton from '../CButton/CButton';

const EditUser = (props) => {
  console.log(props);
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
        padding: '15px 0px',
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Update Name</p>
      </div>
      <div style={{ marginTop: 0, width: '94%' }}>
        <CTextField full={true} label="Full Name" margin="40px 0px" width="100%" />
        <CButton
          background="#2065D1"
          color="white"
          width="100%"
          ariant="contained"
          onClick={handleAdd}
          label="Update"
        />
      </div>
    </div>
  );
};

export default EditUser;
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
