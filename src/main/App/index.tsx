import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import * as Styled from './styles'

export const App  = () => {
  return (
    
      <Styled.Container>
        <RouterProvider router={router} />
      </Styled.Container>
  )
}
