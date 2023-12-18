import React from 'react';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CustomInput = () => {
  return (
    <Container>
      <div className="ant-form-item-control-input">
        <div className="ant-form-item-control-input-content">
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1 1 0%' }}>
              <div className="ant-input-number-group-wrapper">
                <div className="ant-input-number-wrapper ant-input-number-group">
                  <div className="ant-input-number">
                    <div className="ant-input-number-handler-wrap">
                      <IconButton
                        aria-label="Increase Value"
                        disabled={false}
                        size="small"
                        className="ant-input-number-handler ant-input-number-handler-up"
                      >
                        <ArrowUpwardIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Decrease Value"
                        disabled={false}
                        size="small"
                        className="ant-input-number-handler ant-input-number-handler-down"
                      >
                        <ArrowDownwardIcon />
                      </IconButton>
                    </div>
                    <InputBase
                      placeholder="Please enter"
                      className="ant-input-number-input"
                      inputProps={{
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                        'aria-valuenow': 2.02,
                        step: 1,
                      }}
                    />
                    <InputAdornment position="end" className="ant-input-number-group-addon">
                      %
                    </InputAdornment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomInput;
