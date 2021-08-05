import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#000'
}

export const darkTheme = {
  body: '#1A191A',
  fontColor: '#fff'
}

//ratings and reviews specific
export const lightBorder = {
  borderStyle: '1px solid black'
}

export const darkBorder = {
  borderStyle: '1px solid gray'
}
export const GlobalStyles = createGlobalStyle `
  body {
    background-color: ${props => props.theme.body};
  }
`

