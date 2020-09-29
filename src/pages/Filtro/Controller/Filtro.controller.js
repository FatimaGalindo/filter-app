import { redity } from './../instances'
import { Laplaciano_1, Laplaciano_2, Laplaciano_3, Laplaciano_4, Sobel_1, Sobel_2 } from './Initialize.controller'

export function FiltroController () {
  this.KEY = '_INDEXS'
  this.loading = false
  this.message= { type:'error', message:'Ha ocurrido un error...'}
  this.message_open= false
  this.step = 0
  this.generated=false
  this.filterSelected=false
  this.filter_type=false
  this.filter_type_mask=false
  this.dimensions={
    rows:0,
    columns:0
  }
  this.mask=0
  this.matriz=[]
  this.new_matriz=[]
  this.mask_matriz=[]

    this.handleChangeNextStep = () => {
    this.step = this.step+1
    redity.render(this.KEY)
  }

  this.handleGenerateButton = () => {
    this.matriz=[]
    redity.render(this.KEY)
    for (let index = 0; index < this.dimensions.rows; index++) {
      let row=[]
      for (let index = 0; index < this.dimensions.columns; index++) {
        row.push(0)
      }
      this.matriz.push(row)
    }
    if(this.dimensions.rows > 0 && this.dimensions.columns > 0){
      this.generated=true
      this.step=1
    }
    redity.render(this.KEY)
  }

  this.handleChangeValue = (payload) => {
    let value=payload.value=== ''? '': parseInt(payload.value)
    if(value > 7 ){
      value = 7
    }
    this.matriz[payload.row][payload.column]=value
    redity.render(this.KEY)
  }

  this.handleChangeDimension = (ev) => {
    let value=ev.target.value=== ''? '': parseInt(ev.target.value)
    if(value > 25 ){
      value = 25
    }
    this.dimensions[ev.target.name] = value
    redity.render(this.KEY)
  }
  /*STEP 2*/
  this.handleChangeFilterType = (ev) => {
    if(ev.target.value==='sobel'){
      this.mask_matriz=Sobel_1
      this.filter_type_mask='sobel_1'
    }
    if(ev.target.value==='laplaciano'){
      this.mask_matriz=Laplaciano_1
      this.filter_type_mask='laplaciano_1'
    }
    this.filter_type = ev.target.value
    redity.render(this.KEY)
  }

  this.handleChangeMask = (ev) => {
    let value=ev.target.value=== ''? '': parseInt(ev.target.value)
    this.mask = value
    redity.render(this.KEY)
  }

  this.createMask = () => {
    this.mask_matriz=[]
    for (let index = 0; index <  this.mask; index++) {
      let row=[]
      for (let index = 0; index < this.mask; index++) {
        row.push('1/'+(this.mask*this.mask))
      }
      this.mask_matriz.push(row)
    }
  }
  this.handleChangeMaskType = (ev) => {
    this.filter_type_mask=ev.target.value
    switch (ev.target.value) {
      case 'laplaciano_1':
        this.mask_matriz=Laplaciano_1
        break;
      case 'laplaciano_2':
        this.mask_matriz=Laplaciano_2
        break;
      case 'laplaciano_3':
        this.mask_matriz=Laplaciano_3
        break;
      case 'laplaciano_4':
        this.mask_matriz=Laplaciano_4
        break;
      case 'sobel_1':
        this.mask_matriz=Sobel_1
        break;
      case 'sobel_2':
        this.mask_matriz=Sobel_2
        break;
      default:
        break;
    }
    redity.render(this.KEY)

   
  }

  this.handleClickResultMedia= (ev) => {
    this.createMask()
    const newMatriz=[]
    if(this.mask % 2 === 0){
      this.message={type:'error',message:'La dimensión de la máscara debe ser impar'}
      this.handleCloseMessage(true)
      redity.render(this.KEY)
      return
    }else{
      for (let x = 0; x < this.dimensions.rows; x++) {
        let row=[]
        for (let y = 0; y < this.dimensions.columns; y++) {
          row.push(this.calculateMedia(x,y))
        }
        newMatriz.push(row)
      }
      this.new_matriz= newMatriz
      this.step=3
      redity.render(this.KEY)
    }
  }

  this.calculateMedia = (y,x) => {
    const denom= this.mask  * this.mask
    let center = Math.floor(this.mask / 2);
    let endX= center
    let endY= center
    let initX= center*-1
    let initY= center*-1
    let resp = 0;

    for(; initX <= endX ; initX++){
      for(; initY <= endY ; initY++){
        if (initX + y >= 0 && initX + y < this.dimensions.rows &&
          initY + x >= 0 && initY + x <  this.dimensions.columns ) {
          resp += this.matriz[initX + y][initY + x];
        }
      }
      initY = center * -1;
    }
    return Math.round(resp / denom);
  }
  this.handleClickResultMedian= () => {
    this.createMask()
    if(this.mask % 2 === 0){
      this.message={type:'error',message:'La dimensión de la máscara debe ser impar'}
      this.handleCloseMessage(true)
      redity.render(this.KEY)
      return
    }
    const newMatriz=[]
    for (let x = 0; x < this.dimensions.rows; x++) {
      let row=[]
      for (let y = 0; y < this.dimensions.columns; y++) {
        row.push(this.calculateMedian(x,y))
      }
      newMatriz.push(row)
    }
    this.new_matriz= newMatriz
    this.step=3
    redity.render(this.KEY)
  }

  this.handleClickResultLaplacianoSobel= () => {  
    const newMatriz=[]
    for (let x = 0; x < this.dimensions.rows; x++) {
      let row=[]
      for (let y = 0; y < this.dimensions.columns; y++) {
        row.push(this.calculateLaplacianoSobel(x,y))
      }
      newMatriz.push(row)
    }
    this.new_matriz= newMatriz
    this.step=3
    redity.render(this.KEY)
  }

  this.calculateLaplacianoSobel = (x,y) => {
    let center_mask = 1
    let firstX=center_mask*-1
    let firstY=center_mask*-1
    let lastX=center_mask
    let lastY=center_mask
    let resp = 0;

    for(; firstY <= lastY ; firstY++){
      for(; firstX <= lastX ; firstX++){
        if (firstY + x >= 0 && firstY + x < this.dimensions.rows &&
          firstX + y >= 0 && firstX + y <  this.dimensions.columns ) {
          const item = this.matriz[firstY + x][firstX + y]
          const item_mask = this.mask_matriz[firstY + 1][firstX + 1]
          resp+=item*item_mask
        }
      }
      firstX=center_mask*-1
    }
    return resp
  }


  this.calculateMedian = (y,x) => {
    const values=[]
    let center = Math.floor(this.mask / 2);
    let endX= center
    let endY= center
    let initX= center*-1
    let initY= center*-1
    for(; initX <= endX ; initX++){
      for(; initY <= endY ; initY++){
        if (initX + y >= 0 && initX + y < this.dimensions.rows &&
          initY + x >= 0 && initY + x <  this.dimensions.columns ) {
          values.push(this.matriz[initX + y][initY + x])
        }
      }
      initY = center * -1;
    }
    values.sort((a, b) => a - b);
    console.log(values)
    var middle = Math.floor((values.length - 1)/2);
    if (values.length % 2) { 
      return values[middle]; 
     } else { 
      return Math.round((values[middle] + values[middle + 1])/2.0); 
     } 
  }

  this.handleCloseMessage=(val)=>{
    this.message_open= val
    redity.render(this.KEY)
  }

  this.restart=()=>{
    this.step = 0
    this.generated=false
    this.filterSelected=false
    this.filter_type=false
    this.dimensions={
      rows:0,
      columns:0
    }
    this.mask=0
    this.matriz=[]
    this.new_matriz=[]
    this.mask_matriz=[]
    redity.render(this.KEY)
  }
}

export default new FiltroController()
