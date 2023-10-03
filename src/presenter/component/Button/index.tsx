import * as Styled from './styles'

type ButtonProps = {
    type?: "button" | "submit" | "reset"
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({children, type}) => {
  return (
    <Styled.Container type={type}>
        {children}
    </Styled.Container>
  )
}
