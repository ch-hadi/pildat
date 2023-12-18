import React from 'react';
import { Button } from '@mui/material';

const CButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      variant={props.variant}
      style={{
        color: props.color ? props.color : '',
        width: props.width ? props.width : 'auto',
        background: props.background ? props.background : 'auto',
        margin: props.margin || 'auto',
        border: props.border || 'auto',
      }}
    >
      {props.label}
    </Button>
  );
};

export default CButton;
