import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  font-family: 'Heebo', sans-serif;
`
export const StepItem = styled.div`
  display:flex;
  align-items:center;
  div.step {
    align-items: flex-start;
    flex-direction: column;
  }
  span{
    color: #E4C503;
    font-size:12px;
  }
  p {
    font-size:14px;
    color: white;
    font-family: 'Heebo', sans-serif;
  }
`
export const StepSeparator = styled.div`
  border-left: 1px solid #fff;
  height: 50px;
  left: 50%;
  margin-left: 20px;
`

export const NavegationContainer = styled.div`
  width: 300px;
  height: 100vh;
  overflow: auto;
  position: fixed;
  box-sizing:border-box;
  padding:2em;
  z-index: 100;
  background-color: #4D33BA;
  transition: .3s ease;
  box-shadow: -2px 0 10px 0 rgba(0, 0, 0, 0.11);
  .logo{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      max-width: 60px;
    }
  }
  .title{
    color: white;
    font-size:25px;
    font-weight:bold;
  }
`
export const Main = styled.main`
  padding-left: 300px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
  @media screen and (max-width:640px){
    padding-left: 0;
  }
`
