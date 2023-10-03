import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    primaryDark: string,
    primaryLight: string,
    background: string,
    white: string,
    black: string
  }
}