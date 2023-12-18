import React, { useState } from 'react';
import CTextField from '../../components/CTextField/CTextField';
import CSelect from '../../components/CSelect/CSelect';
import CButton from '../../components/CButton/CButton';
import CustomInput from '../../components/CTextField/CustomInput';
import CountrySelector from '../../components/countryList/CountrySelector ';
import GoogleLocationField from '../../components/GoogleLocationField/GoogleLocationField';
import CTimePicker from '../../components/CTimePicker/CTimePicker';
import { Box } from '@mui/material';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const AddUser = () => {
  // const classes = useMyTheme();
  const [addUserData, setAddUserData] = useState({
    phone: '',
    venue_name: '',
    address: '',
    detailed_address: '',
    venue_commission: '',
    venue_remark: '',
    venue_area: '',
  });

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
        <CountrySelector />
        <CTextField name="phone" full={true} label="Phone Number" margin="10px 0px" width="48%" />
        <GoogleLocationField />
        <CTextField name="venue_name" full={true} label="Venue Name(English)" margin="10px 0px" width="48%" />
        <CTextField name="address" full={true} label="Address(English)" margin="10px 0px" width="48%" />
        {/* <CTextField
          name="detailed_address"
          full={true}
          label="Detailed Address(English)"
          margin="10px 0px"
          width="48%"
        /> */}
        <CTextField
          name="venue_commission"
          full={true}
          label="Venue commission sharing ratio"
          margin="10px 0px"
          width="48%"
          type="number"
        />
        <CTextField name="venue_remark" full={true} label="Venue Remark" margin="10px 0px" width="48%" />
        <CTextField name="venue_area" full={true} label="Venue Area (m²)" margin="10px 0px" width="48%" />
        {/* <CTextField
          name="venue_commission"
          full={true}
          label="Venue commission sharing ratio (%)"
          margin="10px 0px"
          width="48%"
        /> */}
        <CSelect
          width="48%"
          label="Venue Category"
          data={userData}
          value={selectedProfile}
          setValue={setSelectedProfile}
        />
        <CTextField name="venue_contact" full={true} label="Venue Contact" margin="10px 0px" width="48%" />
        <CTimePicker label="Business Hours Starts At" />
        <CTimePicker label="Business Hours Ends At" />
        <Box sx={{ textAlign: 'end', width: '100%' }}>
          {/* <hr style={{ opacity: '25%' }} /> */}
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
