
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FiltroController from './Controller/Filtro.controller'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background:'red'

  }
}));


export default function Steps(){
  const Controller = FiltroController
  const classes = useStyles();
  const steps=[
                {value:1,label:'Ingresa las dimensiones'},
                {value:2,label:'Ingresa los valores'},
                {value:3,label:'Elige el tipo de filtro'},
                {value:4,label:'¡Listo!'}
              ]
    return(
      <div className={classes.root}>
        <Stepper  activeStep={Controller.step} >
            {steps.map((item, index) => {
                const stepProps = {};
                const labelProps = {};
                stepProps.completed = index <= Controller.step;
                return (
                  <Step key={item.value} {...stepProps}   >
                    <StepLabel {...labelProps}>{item.label}</StepLabel>
                  </Step>
                );
              })}
        </Stepper>
      </div>
  )
}