import React from 'react'
import {StepTitle,ButtonContainer,MatrizContainer}  from './Filtro.style'
import Button from './../../components/Button';
import TextField from '@material-ui/core/TextField';
import FiltroController from './Controller/Filtro.controller'

export default function Step1(){
  const Controller = FiltroController
  return(
  <>
    <StepTitle >
      Imagen original
    </StepTitle>
   
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
                  style={{width:'50px'}}
                  inputProps={{min: 0, style: { textAlign: 'center' }}} 
                  disabled
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
   {
     Controller.filter_type!=='mediana' &&
     <>
     <StepTitle >
      Máscara
      </StepTitle>
      <MatrizContainer>
        {
          Controller.mask_matriz.map((item,x)=>{
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
                      disabled
                      style={{width:'50px'}}
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
     </>
   }
   {
     !Controller.new_matriz_rescale && <>
      <StepTitle >
        Imagen nueva
      </StepTitle>
      <MatrizContainer>
        {
          Controller.new_matriz.map((item,x)=>{
            return(
              <div style={{display:'flex', justifyContent:'center'}} key={x}  >
                {item.map((item,y)=>{
                  return(
                    <TextField
                      key={y}
                      id={'input-'+ x +'-'+ y}
                      margin="dense"
                      variant="outlined"
                      inputProps={{min: 0, style: { textAlign: 'center' }}} 
                      className='mr-2 ml-2'
                      style={{width:'50px'}}
                      disabled
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
     </>
   }
   {
     Controller.new_matriz_rescale && <>
      <StepTitle >
        Imagen reescalada
      </StepTitle>
      <MatrizContainer>
        {
          Controller.new_matriz_rescale.map((item,x)=>{
            return(
              <div style={{display:'flex', justifyContent:'center'}} key={x}  >
                {item.map((item,y)=>{
                  return(
                    <TextField
                      key={y}
                      id={'input-'+ x +'-'+ y}
                      margin="dense"
                      variant="outlined"
                      inputProps={{min: 0, style: { textAlign: 'center' }}} 
                      className='mr-2 ml-2'
                      style={{width:'50px'}}
                      disabled
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
     </>
   }
    <ButtonContainer className='mt-3'>
    {
      Controller.rescale_available &&  <Button color="secondary" className='mr-3' onClick={Controller.handleRescale}>
        Reescalar
      </Button>
    }
    <Button color="secondary" onClick={Controller.restart}>
      Nuevo
    </Button>
  </ButtonContainer>
  </>
  )
}