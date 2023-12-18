import { TextField } from '@mui/material';
import React from 'react';

const CTextField = (props) => {
  return (
    <TextField
      style={{ width: props.width ? props.width : 'auto', margin: props.margin ? props.margin : 'auto' }}
      fullWidth={props.full ? props.full : false}
      size={props.size ? props.size : 'medium'}
      onChange={props.onChange}
      id="outlined-basic"
      label={props.label}
      variant="outlined"
      name={props.name}
      defaultValue={props.defaultValue}
      disabled={props.disabled||false}
    />
  );
};

export default CTextField;
