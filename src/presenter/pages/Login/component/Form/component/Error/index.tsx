import { useContext } from 'react'
import { Spenner } from '../../../../../../component/Spenner'
import * as Styled from './styles'
import { FormContext } from '../../../../../../../context/formContext'

export const Error  = () => {
    const {loading, error} = useContext(FormContext)
  return (
    <Styled.Container>
        {loading && <Spenner />}
        {
        error 
        && <Styled.ErrorMessage role='message'>
              {error}
            </Styled.ErrorMessage>
          }
    </Styled.Container>
  )
}
