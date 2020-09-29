import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f6f6f6;
  font-family: 'Heebo', sans-serif;
  overflow: hidden;
`


export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 48px);
  overflow: auto;
  padding-top:3em;
  position: relative;
  @media screen and (max-width:640px){
    padding-left: 0;
  }
`
