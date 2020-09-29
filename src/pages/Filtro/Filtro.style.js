import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 2em 4em;
  max-width:1024px;
  margin:0 auto;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border);
    box-shadow: inset var(--shadow);
    border-radius: 10px;
  }
  @media screen and (max-width:640px){
    padding: 2em;
  }
`
export const StepContainer = styled.div`
  padding: 2em;
`

export const StepTitle = styled.h3`
  color: #6B6A63;
  font-size: 24px;
  text-align: center;
  font-family: 'Heebo', sans-serif;
`
export const StepForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MatrizContainer = styled.div`
  margin: 1em 1em;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

