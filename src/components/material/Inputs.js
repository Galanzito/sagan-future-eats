import React from 'react'
import styled from 'styled-components'
import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Wrapper = styled.div`
  width:100%;
  padding:0 16px;
`
const TextFieldStyled = styled(TextField)`
  border-radius:2px;
  text-transform: none;
  font-size:16px;
  letter-spacing: -0.39px;
  margin: 8px 0;
  & .MuiOutlinedInput-root{
    border-radius:2px;
  }
`
const OutlinedInputStyled = styled(OutlinedInput)`
  border-radius:2px;
  font-size:16px;
  margin: 8px 0;
`

export function MyInput(props) {
  return (
    <Wrapper>
      <TextFieldStyled
        label={props.label}
        variant="outlined"
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Wrapper>
  )
}

export function MyPasswordInput(props) {
  const [values, setValues] = React.useState({
    amount: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <FormControl required variant='outlined' fullWidth >
        <InputLabel htmlFor="password">{props.label}</InputLabel>
        <OutlinedInputStyled
          id="password"
          name={props.name}
          type={values.showPassword ? 'text' : 'password'}
          value={props.value}
          onChange={props.onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </Wrapper>
  )
}