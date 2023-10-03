import * as Styled from './styles'

type ButtonProps = {
    type?: "button" | "submit" | "reset"
    children: React.ReactNode
}

export const Button = ({children, type}: ButtonProps) => {
  
  return (
    <Styled.Container type={type}>
        {children}
    </Styled.Container>
  )
}
