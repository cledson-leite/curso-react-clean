import styled from "styled-components"

export const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ErrorMessage = styled.span`
    text-align: center;
   color: ${({theme}) => theme.primary};
   margin-top: 1rem;
`