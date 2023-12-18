import React from 'react';
import { makeStyles } from '@mui/base/';

export const useMyTheme = makeStyles((theme) => ({
  // Define your custom styles here
  m: {
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
