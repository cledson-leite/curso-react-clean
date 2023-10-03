import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { Form } from './component/Form'

import * as Styled from './styles'
import { FormProvider } from '../../../context/formContext'

export const Login = () => {
  return (
    <FormProvider>
      <Styled.Container>
        <Header />
        <Form />
        <Footer />
      </Styled.Container>
    </FormProvider>
  )
}
