import { Button } from '../../../../component/Button'
import { Input } from '../../../../component/Input'
import { Error } from './component/Error'
import * as Styled from './styles'

export const Form  = () => {
  return (
    <Styled.Container>
        <Styled.Title>Login</Styled.Title>
        <Input type='email' placeholder='Digite seu email'/>
        <Input type='password' placeholder='Digite sua senha'/>
        <Button type='submit' >Entrar</Button>
        <Styled.Link>Criar conta</Styled.Link>
        <Error />
    </Styled.Container>
  )
}
