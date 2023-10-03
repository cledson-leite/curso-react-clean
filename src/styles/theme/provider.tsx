import { ThemeProvider } from "styled-components";
import { theme as Theme} from './'

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ProviderTheme: React.FC<ProviderProps> = ({
  children,
}) => {
    const theme = Theme
    return <ThemeProvider theme={theme} >{children}</ThemeProvider>
}