import React from 'react'
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#4D4375'
    }
    ,
    secondary:{
      main:'#8674CC'
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