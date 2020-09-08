
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import FiltroController from './Controller/Filtro.controller'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ccd',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    background: 'rgb(109,51,186)',
    backgroundImage: 'radial-gradient(circle, rgba(37,1,186,1) 50%, rgba(162,80,255,1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    background: 'rgb(109,51,186)',
    backgroundImage: 'radial-gradient(circle, rgba(37,1,186,1) 50%, rgba(162,80,255,1) 100%) ',
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

export default function Steps(){
  const Controller = FiltroController
  const classes = useStyles();
  const steps=[1,2,3,4]
    return(
    <Stepper alternativeLabel activeStep={0} connector={<ColorlibConnector />}>
      {steps.map((label,index) => (
        <Step key={label} >
          <StepLabel  StepIconComponent={()=> <div
            className={clsx(classes.root, {
              [classes.active]: index=== Controller.step,
              [classes.completed]: index <= Controller.step,
            })}
          >
            {index+1}
          </div>} />
        </Step>
      ))}
  </Stepper>
  )
}