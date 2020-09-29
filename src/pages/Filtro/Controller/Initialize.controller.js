export const Laplaciano_1=[[0,1,0],[1,-4,1],[0,1,0]]
export const Laplaciano_2=[[0,-1,0],[-1,4,-1],[0,-1,0]]
export const Laplaciano_3=[[1,1,1],[1,-8,1],[1,1,1]]
export const Laplaciano_4=[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]]
export const Sobel_1=[[-1,-2,-1],[0,0,0],[1,2,1]]
export const Sobel_2=[[1,0,-1],[2,0,-2],[1,0,-1]]
export const RadioGroupLaplaciano = [
  {value:'laplaciano_1',mask:Laplaciano_1},
  {value:'laplaciano_2',mask:Laplaciano_2},
  {value:'laplaciano_3',mask:Laplaciano_3},
  {value:'laplaciano_4',mask:Laplaciano_4},
]
export const RadioGroupSobel = [
  {value:'sobel_1',mask:Sobel_1},
  {value:'sobel_2',mask:Sobel_2},
]