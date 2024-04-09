import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand--1: #ffb545;
    --color-brand--2: #00c46a;

    --color-dark--0: #242a2e;
    --color-dark--1: #2d3439;
    --color-dark--2: #42484d;
    --color-light--1: #aaa;
    --color-light--2: #ececec;
    --color-light--3: #d6dee0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Manrope", sans-serif;
    color: var(--color-light--2);
    font-weight: 400;
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  /* Leaflet CSS */
  .leaflet-popup .leaflet-popup-content-wrapper {
    background-color: var(--color-dark--1);
    color: var(--color-light--2);
    border-radius: 0.5rem;
    padding-right: 0.6rem;
  }

  .leaflet-popup .leaflet-popup-content {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .leaflet-popup .leaflet-popup-tip {
    background-color: var(--color-dark--1);
  }

  .leaflet-popup-content-wrapper {
    border-left: 5px solid var(--color-brand--2);
  }
  /* ----------- */
`;

export default GlobalStyles;
