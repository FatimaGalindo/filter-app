import React from 'react'
import {StepTitle,StepForm,MatrizContainer}  from './Filtro.style'
import FiltroController from './Controller/Filtro.controller'
import { Alert, AlertTitle } from '@material-ui/lab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputField from './../../components/InputField';
import Button from './../../components/Button';
import TextField from '@material-ui/core/TextField';
import {RadioGroupLaplaciano,RadioGroupSobel} from './Controller/Initialize.controller'
import Grid from '@material-ui/core/Grid';

export default function Step1(){
  const Controller = FiltroController
  return(
  <>
    <StepTitle >
        Elige el tipo de filtro
    </StepTitle>
    <FormControl component="fieldset">
      <FormLabel component="legend">Tipo de filtro</FormLabel>
      <RadioGroup row aria-label="position" name="position" value={Controller.filter_type} className='mt-3' onChange={Controller.handleChangeFilterType}>
        <FormControlLabel
          value="media"
          control={<Radio color="primary" />}
          label="Media"
          labelPlacement="end"
        />
        <FormControlLabel
          value="mediana"
          control={<Radio color="secondary" />}
          label="Mediana"
          labelPlacement="end"
        />
        <FormControlLabel
          value="laplaciano"
          control={<Radio color="primary" />}
          label="Laplaciano"
          labelPlacement="end"
        />
         <FormControlLabel
          value="sobel"
          control={<Radio color="secondary" />}
          label="Sobel"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
    {
      !Controller.filter_type &&
      <Alert severity="info"className='mt-3'>
        <AlertTitle>Importante</AlertTitle>
         Selecciona el tipo de filtro correspondiente para poder agregar la máscara dependiendo el caso
      </Alert>
    }
    {
      Controller.filter_type==='media' &&
      <FormGroup >
        <StepForm className='mt-3'>
          <label className='mr-3'  htmlFor='input-mask'>Ingresa la dimensión de la máscara:</label>
          <InputField
            label="Dimension de la máscara"
            variant="outlined"
            id="input-mask"
            className='mr-3'
            name='mask'
            onChange={Controller.handleChangeMask}
            value={Controller.mask}
            type="number"
          />
          
          <Button color="primary" onClick={Controller.handleClickResultMedia} >
              Aplicar filtro de la media
          </Button>
        </StepForm>
      </FormGroup >
    }
     {
      Controller.filter_type==='mediana' &&
      <StepForm className='mt-3'>
      <label className='mr-3'  htmlFor='input-mask'>Ingresa la dimensión de la máscara:</label>
      <InputField
        label="Dimension de la máscara"
        variant="outlined"
        id="input-mask"
        className='mr-3'
        name='mask'
        onChange={Controller.handleChangeMask}
        value={Controller.mask}
        type="number"
      />
      
      <Button color="primary" onClick={Controller.handleClickResultMedian} >
          Aplicar filtro de la mediana
      </Button>
    </StepForm>
    }
    {
      Controller.filter_type==='laplaciano' &&
      <StepForm className='mt-3'>
       <Grid container spacing={2}>
        <label className='mt-3' >Seleccione la máscara:</label>
        <RadioGroup row aria-label="position" name="position" value={Controller.filter_type_mask} className='mt-2' onChange={Controller.handleChangeMaskType}>
          {
            RadioGroupLaplaciano.map(item=>{
              return(
                <Grid item xs={12} md={6}> 
                <div style={{display:'flex', justifyContent:'center'}}   >
                <FormControlLabel
                    value={item.value}
                    control={<Radio color="primary" />}
                    label=""
                    labelPlacement="end"
                />
                <MatrizContainer>
                  {
                    item.mask.map((item,x)=>{
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
                                onChange={(ev)=>{}}
                            />
                            )
                          })}
                        </div>
                      )
                    })
                  }
                </MatrizContainer>
              </div>
             
              </Grid>
              )
            })
          }
        </RadioGroup>
        <Grid item xs={12} container justify="flex-end" > 
              <Button color="primary" onClick={Controller.handleClickResultLaplacianoSobel} >
                Aplicar filtro laplaciano
             </Button>
        </Grid>
        </Grid>
      </StepForm>
    }
    {
      Controller.filter_type==='sobel' &&
      <StepForm className='mt-3'>
       <Grid container spacing={2}>
        <label className='mt-3' >Seleccione la máscara:</label>
        <RadioGroup row aria-label="position" name="position" value={Controller.filter_type_mask} className='mt-2' onChange={Controller.handleChangeMaskType}>
          {
            RadioGroupSobel.map(item=>{
              return(
                <Grid item xs={12} md={6}> 
                <div style={{display:'flex', justifyContent:'center'}}   >
                <FormControlLabel
                    value={item.value}
                    control={<Radio color="primary" />}
                    label=""
                    labelPlacement="end"
                />
                <MatrizContainer>
                  {
                    item.mask.map((item,x)=>{
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
                                onChange={(ev)=>{}}
                            />
                            )
                          })}
                        </div>
                      )
                    })
                  }
                </MatrizContainer>
              </div>
              </Grid>
              )
            })
          }
        </RadioGroup>
        <Grid item xs={12} container justify="flex-end" > 
          <Button color="primary" onClick={Controller.handleClickResultLaplacianoSobel} >
            Aplicar filtro sobel
          </Button>
        </Grid>
        </Grid>
      </StepForm>
    }
  </>
  )
}