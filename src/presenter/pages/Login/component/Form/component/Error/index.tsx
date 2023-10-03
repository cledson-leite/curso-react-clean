import { Spenner } from '../../../../../../component/Spenner'
import * as Styled from './styles'

export const Error: React.FC = () => {
  return (
    <Styled.Container>
        <Spenner />
        <Styled.ErrorHessage>Erro</Styled.ErrorHessage>
    </Styled.Container>
  )
}
