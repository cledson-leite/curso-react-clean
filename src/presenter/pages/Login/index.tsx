import { Header } from './component/Header'
import { Footer } from './component/Footer'

import * as Styled from './styles'
import { Form } from './component/Form'

export const Login: React.FC = () => {
  return (
    <Styled.Container>
      <Header />
      <Form />
      <Footer />
    </Styled.Container>
  )
}
