import React from 'react';
import { TextField, MenuItem, InputAdornment, FormControl, Select, InputLabel, Typography } from '@mui/material';
import { countries } from 'country-data';
import pull from 'lodash/pull';
import keys from 'lodash/keys';

var countries_new = keys(countries).filter((code) => code.length == 2)


const SelectCountry = (state, handleCountryChange) => (
  <InputAdornment position="start">
    <Select
      value={state.callingCode}
      variant='standard'
      onChange={handleCountryChange}
      sx={{ width: '100px', marginRight: 1 }}
      >
      {countries_new.map((code) => {
        const { emoji } = countries[code];

        return countries[code].countryCallingCodes.map((callingCode) => (
          <MenuItem key={`${callingCode}`} value={callingCode}>
            {`${emoji} ${callingCode}`}
          </MenuItem>
        ))
      })}
    </Select>
  </InputAdornment>
)
const PhoneFieldWithCountry = (props) => {
  const [state, setState] = React.useState({
    phoneNumber: null,
    callingCode: '+62'
  });

  const handleOnChange = () => {
    const callingCode = Number(state.callingCode);
    const value = state.phoneNumber;
    const newValue = `${callingCode}${value}`;

    const event = {
      target: {
        value: newValue
      }
    }
    props.onChange(event)
  };

  const handleCountryChange = (event) => {
    setState((prevstate => ({
      ...prevstate,
      callingCode: event.target.value
    })));
  };

  const handlePhoneChange = (event) => {
    setState((prevstate => ({
      ...prevstate,
      phoneNumber: event.target.value
    })));
  };

  React.useEffect(handleOnChange,[state.phoneNumber, state.callingCode]);
  
  return (
    <FormControl variant="outlined" fullWidth>
      <TextField
        {...props}
        onChange={handlePhoneChange}
        InputProps={{
          startAdornment: SelectCountry(state, handleCountryChange),
        }}
        fullWidth
      />
    </FormControl>
  );
};

export default PhoneFieldWithCountry;
