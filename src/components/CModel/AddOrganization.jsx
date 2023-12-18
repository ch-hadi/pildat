import React, { useState } from 'react';
import CTextField from '../CTextField/CTextField';
import CSelect from '../CSelect/CSelect';
import CButton from '../CButton/CButton';
import { useDispatch } from 'react-redux';
import { createOrganization } from '../../redux/features/organizationSlice';

const AddOrganiztion = (props) => {
  const dispatch = useDispatch();
  const [selectedProfile, setSelectedProfile] = useState('');
  const [organizationData, setOrganizationData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    active: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setOrganizationData((pre) => ({ ...pre, [name]: value }));
  };
  const handleAdd = () => {
    if (!organizationData.name && !organizationData.address && !organizationData.email) {
      return alert('All fields are required!');
    }
    // console.log('added', organizationData);
    dispatch(createOrganization(organizationData)).then((res) => {
      if (res.type == 'create-organization/organization/fulfilled') {
        props.setOpen(false);
      }
    });
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Add Organization</p>
      </div>
      <div style={{ marginTop: 10, width: '94%' }}>
        <CTextField
          name="name"
          full={true}
          onChange={onChangeHandler}
          label="Organization Name"
          margin="10px 0px"
          width="100%"
        />
        {/* <CTextField full={true} label="Last  Name" margin="10px 0px" width="100%" /> */}
        <CTextField name="email" full={true} onChange={onChangeHandler} label="Email" margin="10px 0px" width="100%" />
        <CTextField name="phone" full={true} onChange={onChangeHandler} label="Phone" margin="10px 0px" width="100%" />
        <CTextField
          name="address"
          full={true}
          onChange={onChangeHandler}
          label="Address"
          margin="10px 0px"
          width="100%"
        />

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

export default AddOrganiztion;
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
