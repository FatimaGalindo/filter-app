// @ts-nocheck
import styled,{keyframes} from 'styled-components'

export const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const LoadingStyled = styled.div`
  animation: ${fadeIn} 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: ${props => props.height};
`
