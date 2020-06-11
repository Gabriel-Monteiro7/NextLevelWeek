import styled, { createGlobalStyle, CSSProp } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
*{
  margin: 0;
      padding: 0;
      box-sizing: border-box;
}
body{
  --primary-color: #34CB79;
  --title-color: #322153;
  --text-color: #6C6C80;
  background: #F0F0F5;

      scroll-behavior: smooth;
      .btn,a,button{
        border:0px;
        cursor: pointer;
        background:transparent;
        text-decoration:none;
        &:hover{
          text-decoration:none;
        }

    }
    button,input,select{
      outline: none;
    }  
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
      font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: Ubuntu;
      color: var(--title-color);
    }
    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;

}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
`;
