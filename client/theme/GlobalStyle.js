import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

html, body {
  width:100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  scrollbar-width: thin;
  letter-spacing: 0.0625em;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  max-width: 2560px;
}

@media(max-width: 679px){
  height: auto;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  padding-bottom: 20px;
  font-family: 'Oswald', sans serif;
}

h2, h3, h4, h5, h6 {
  padding-bottom: 20px;
  font-weight: 700;
}

a {
  text-decoration: none;
  transition-duration: 0.4s;
}

label {
  display: block;
}

b {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
}

ul {
  list-style-type: none;
}

li {
  list-style-type: none;
}

img {
  border:none;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: left;
}`

export default GlobalStyle
