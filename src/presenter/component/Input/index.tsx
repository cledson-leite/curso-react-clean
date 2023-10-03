import {FaRegFrown} from 'react-icons/fa'
import * as Styled from './styles'

type InputProps ={
    type: string,
    placeholder: string
}

export const Input = ({type, placeholder}: InputProps) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }
  return (
    <Styled.Container>
        <Styled.Field type={type} readOnly onFocus={enableInput} placeholder={placeholder}/>
        <Styled.Icon>
            <FaRegFrown />
        </Styled.Icon>
    </Styled.Container>
  )
}
