import React from 'react'
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#6B6A63',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6B6A63',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4D33BA',
      },
      '&:hover fieldset': {
        borderColor: '#6B6A63',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6B6A63',
      },
    },
  },
})(TextField);


export default function InputField({label, id, name, value, onChange,...props}){
  return(
    <CssTextField
        label={label}
        variant={props.variant}
        id={id}
        className={props.className}
        onChange={onChange}
        value={value}
        name={name}
        {...props}
      />
  )
}