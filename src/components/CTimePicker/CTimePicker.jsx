import * as React from 'react';
import { Box } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers';

export default function CTimePicker(props) {
  return (
    <Box sx={{ width: '48%' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker']}>
          <TimePicker sx={{ width: '100%' }} label={props.label} />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
