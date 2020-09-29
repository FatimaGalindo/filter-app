import React from 'react'
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#E84545'
    }
    ,
    secondary:{
      main:'#C90000'
    }
  },
});

export default function CustomButton({name, color, children,...props}){
  return(
    <ThemeProvider theme={theme}>
      <Button variant="contained" color={color} {...props}>
        {children}
      </Button>
    </ThemeProvider>
  )
}