import React, { useState } from 'react';
import CTextField from '../../CTextField/CTextField';
import CButton from '../../CButton/CButton';
import { Box } from '@mui/material';
import CSelect from '../../CSelect/CSelect';
import Api from '../../../utils/Api';
// import { useMyTheme } from '../../theme/overrides/myTheme';

const EditSubCategory = (props) => {
  // console.log(props)
  // const classes = useMyTheme();
  const [Data, setAddAdminData] = useState({
    sub_category_name: props.data.sub_category_name,
  });
  const [selectedStatus, setSelectedStatus] = useState(props.data.status);
  const [category_id,setCategory_id]= useState(props.data.category_id);
  
  const onChangeHandler =(e)=>{
    const {name , value} = e.target;
    setAddAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleAdd = () => {
    let status = selectedStatus;
    let finalData = {...Data,status,category_id}
    Api.put(`/sub_categories/${props.data.id}`,finalData).then((res)=>{
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
        <p style={{ borderRadius: 4, margin: 0, textAlign: 'center' }}> Update Sub Category</p>
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
         <CTextField onChange={onChangeHandler}  name="sub_category_name" defaultValue={Data.sub_category_name} full={true} label="Sub Category Name" margin="10px 0px" width="100%" />
        <CSelect
          width="100%"
          label="Category*"
          data={ props.categories && props.categories.map((c) => ({
            name: c.category_name,
            value: c.id,
          }))}
          value={category_id}
          setValue={setCategory_id}
        />
        <CSelect
          width="100%"
          label="Status*"
          data={statusData}
          value={selectedStatus}
          setValue={setSelectedStatus}
          margin='10px 0px'
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

export default EditSubCategory;

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