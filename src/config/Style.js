import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`

  :root{
    --spacer: 1.2rem;
    --shadow: -2px 0 10px 0 rgba(0, 0, 0, 0.11);
    --shadow-alt : -2px 0px 20px 0 rgba(0, 0, 0, 0.11);
    --table-hover: rgba(42, 42, 91, .07);
    --icon-alt:#DADADA;
  }
  
  .mt-1{
    margin-top: calc(.25 * var(--spacer));
  }
  .mt-2{
    margin-top: calc(.5 * var(--spacer));
  }
  .mt-3{
    margin-top: var(--spacer);
  }
  .mt-4{
    margin-top: calc(1.5 * var(--spacer));
  }

  .mb-1{
    margin-bottom: calc(.25 * var(--spacer));
  }
  .mb-2{
    margin-bottom: calc(.5 * var(--spacer));
  }
  .mb-3{
    margin-bottom: var(--spacer);
  }
  .mb-4{
    margin-bottom: calc(1.5 * var(--spacer));
  }

  .ml-1{
    margin-left: calc(.25 * var(--spacer));
  }
  .ml-2{
    margin-left: calc(.5 * var(--spacer));
  }
  .ml-3{
    margin-left: var(--spacer);
  }
  .ml-4{
    margin-left: calc(1.5 * var(--spacer));
  }
  .ml-5{
    margin-left: calc(2 * var(--spacer));
  }

  .mr-1{
    margin-right: calc(.25 * var(--spacer));
  }
  .mr-2{
    margin-right: calc(.5 * var(--spacer));
  }
  .mr-3{
    margin-right: var(--spacer);
  }
  .mr-4{
    margin-right: calc(1.5 * var(--spacer));
  }
  .mr-5{
    margin-right: calc(2 * var(--spacer));
  }

  .pl-1{
    padding-left: calc(.25 * var(--spacer));
  }
  .pl-2{
    padding-left: calc(.5 * var(--spacer));
  }
  .pl-3{
    padding-left: var(--spacer);
  }
  .pl-4{
    padding-left: calc(1.5 * var(--spacer));
  }

  .col-width-field{
    max-width: 290px;
    @media screen and (max-width:640px){
      max-width: auto;
    } 
  }
  .col-width-field-2{
    max-width: 660px;
    @media screen and (max-width:640px){
      max-width: auto;
    }
  }
`

export default Style

