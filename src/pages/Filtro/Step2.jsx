import React from 'react'
import {StepTitle,StepForm}  from './Filtro.style'
import FiltroController from './Controller/Filtro.controller'
import { Alert, AlertTitle } from '@material-ui/lab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputField from './../../components/InputField';
import Button from './../../components/Button';

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
          disabled
          labelPlacement="end"
        />
         <FormControlLabel
          value="sobel"
          control={<Radio color="secondary" />}
          label="Sobel"
          disabled
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
        <StepForm>
          {
            /* 
            <FormControlLabel
              control={<Checkbox checked={true} onChange={()=>{}} name="checked" />}
              label="Secondary"
            />
            */
          }
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
  </>
  )
}