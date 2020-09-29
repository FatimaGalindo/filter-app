import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer, Main } from './Layout.style'
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/img/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar:{
    background:'#d50000'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Layout ({children}) {
  const classes = useStyles();
  return (
    <>
      <LayoutContainer>
      <div className={classes.root}>
      <AppBar position="fixed"  className={classes.bar}>
        <Toolbar variant="dense">
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
            <div>
          <Typography variant="h6" color="inherit">
            <img src={Logo} alt='logo' width='20'  /> Filter App
          </Typography>
          </div>
            <img alt='logo' style={{objectFit:'contain'}}  width='23' src='https://pregrado.upc.edu.pe/static/img/upc__white.png'></img>
          </div>
          
        </Toolbar>
      </AppBar>
      </div>
        <Main>
          { children }
        </Main>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
