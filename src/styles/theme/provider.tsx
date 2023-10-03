import { ThemeProvider } from "styled-components";
import { theme as Theme} from './'

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ProviderTheme = ({
  children,
}: ProviderProps) => {
    const theme = Theme
    return <ThemeProvider theme={theme} >{children}</ThemeProvider>
}