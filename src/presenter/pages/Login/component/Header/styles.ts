import styled from 'styled-components';
export const Container =styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2.5rem solid ${({theme}) => theme.primaryDark};
    background-color: ${({theme}) => theme.primary};
`
export const Image = styled.img`
    margin-top: 2.5rem;
`
export const Title =styled.h1`
    color: ${({theme}) => theme.white};
    margin: 1rem 0 2.5rem;
`