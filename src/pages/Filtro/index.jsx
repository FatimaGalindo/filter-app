import React from 'react'
import { MainContainer,StepContainer } from './Filtro.style'
import Paper from '@material-ui/core/Paper';
import Steps from './Steps'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { redity } from './instances'
import FiltroController from './Controller/Filtro.controller'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default React.memo(redity.connect(FiltroController.KEY)(() => {
    const Controller = FiltroController
    return(
    <MainContainer>
      <Steps/>
      <br/>
      <Paper >
        <StepContainer>
          { (Controller.step===0 || Controller.step===1) && <Step1/> }
          { Controller.step===2 && <Step2/> }
          { Controller.step===3 && <Step3/> }
        </StepContainer>
      </Paper>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}
        open={Controller.message_open}
        autoHideDuration={6000}
        onClose={()=>Controller.handleCloseMessage(false)}
        >
        <Alert severity={Controller.message.type} onClose={()=>Controller.handleCloseMessage(false)} >
          {Controller.message.message}
        </Alert>
      </Snackbar>
    </MainContainer>
  )
}))
