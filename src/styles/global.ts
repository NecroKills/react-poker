import { createGlobalStyle } from 'styled-components';

import background from '../assets/background/blue.jpg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: url(${background});
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-size: 16px;
  font-family: 'Roboto Slab', sans-serif;
}

border-style, -moz-user-input, button {
  font: 16px Roboto Slab, sans-serif,
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}



`;
