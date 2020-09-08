import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer, Main,NavegationContainer, StepItem,StepSeparator } from './Layout.style'
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/img/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  rounded: {
    color: '#fff',
    backgroundColor: '#4D33BA',
    border:'1px solid #fff',
  },
}));


function Layout ({children}) {
  const classes = useStyles();
  return (
    <>
      <LayoutContainer>
        <NavegationContainer>
        <div className='logo'>
          <img src={Logo} alt='logo' className='mr-2' />
            <Typography className='title'>Filter App</Typography>
        </div>
        <StepItem className='mb-1'>
          <Avatar variant="rounded" className={classes.rounded}>
            1
          </Avatar>
          <div className='ml-3 step'>
            <span>PASO 1</span>
            <p>
              Ingresa las dimensiones
            </p>
          </div>
        </StepItem>
        <StepSeparator/>
        <StepItem className='mb-1 mt-1'>
          <Avatar variant="rounded" className={classes.rounded}>
            2
          </Avatar>
          <div className='ml-3 step'>
            <span>PASO 2</span>
            <p>
              Ingresa los valores 
            </p>
          </div>
        </StepItem>
        <StepSeparator/>
        <StepItem className='mb-1 mt-1'>
          <Avatar variant="rounded" className={classes.rounded}>
            3
          </Avatar>
          <div className='ml-3 step'>
            <span>PASO 3</span>
            <p>
              Elige el tipo de filtro
            </p>
          </div>
        </StepItem>
        <StepSeparator/>
        <StepItem className='mb-1 mt-1'>
          <Avatar variant="rounded" className={classes.rounded}>
            4
          </Avatar>
          <div className='ml-3 step'>
            <span>PASO 4</span>
            <p>
              ¡Listo!
            </p>
          </div>
        </StepItem>
        </NavegationContainer>
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
