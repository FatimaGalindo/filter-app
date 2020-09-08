import React from 'react'
import {StepTitle,StepForm,ButtonContainer,MatrizContainer}  from './Filtro.style'
import Button from './../../components/Button';
import InputField from './../../components/InputField';
import TextField from '@material-ui/core/TextField';
import FiltroController from './Controller/Filtro.controller'
import { Alert, AlertTitle } from '@material-ui/lab';

export default function Step1(){
  const Controller = FiltroController

  return(
  <>
    <StepTitle >
       Ingresa las dimensiones
    </StepTitle>

    <StepForm className='mt-3 mb-3'>
      <InputField
        label="Filas"
        variant="outlined"
        id="input-rows"
        className='mr-2'
        name='rows'
        inputProps={{min: 0, style: { textAlign: 'center' }}} 
        value={Controller.dimensions.rows}
        onChange={Controller.handleChangeDimension}
        type="number"
      />
      <InputField
        label="Columnas"
        variant="outlined"
        id="input-columns"
        className='mr-2'
        name='columns'
        inputProps={{min: 0, style: { textAlign: 'center' }}} 
        value={Controller.dimensions.columns}
        onChange={Controller.handleChangeDimension}
        type="number"
      />
      <Button color="primary" onClick={Controller.handleGenerateButton}>
          Generar
      </Button>
    </StepForm>
    {
      Controller.generated &&
      <>
        <MatrizContainer>
        {
          Controller.matriz.map((item,x)=>{
            return(
              <div style={{display:'flex', justifyContent:'center'}} key={x}  >
                {item.map((item,y)=>{
                  return(
                    <TextField
                      key={y}
                      id={'input-'+ x +'-'+ y}
                      margin="dense"
                      variant="outlined"
                      className='mr-2 ml-2'
                      inputProps={{min: 0, style: { textAlign: 'center' }}} 
                      type='number'
                      value={item}
                      onChange={(ev)=>Controller.handleChangeValue({row: x, column: y, value: ev.target.value})}
                  />
                  )
                })}
              </div>
            )
          })
        }
      </MatrizContainer>
      <ButtonContainer className='mt-3'>
        <Button color="primary" onClick={Controller.handleChangeNextStep}>
            Siguiente
        </Button>
      </ButtonContainer>
    </>
    }
   {
      !Controller.generated &&
      <Alert severity="info"className='mt-3'>
        <AlertTitle>Importante</AlertTitle>
          Agrega las dimensiones para poder realizar la representación matricial de la imagen
      </Alert>
   }
  </>
  )
}