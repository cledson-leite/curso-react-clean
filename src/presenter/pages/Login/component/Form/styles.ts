import styled from 'styled-components';
export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 25rem;
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px -1px ${({theme}) => theme.black};

`
export const Title =styled.h2`
    color: ${({theme}) => theme.primaryDark};
    text-align: center;
    font-size: 1.25rem;
    text-transform: uppercase;
`
export const Link = styled.span`
    text-align: center;
   color: ${({theme}) => theme.primary};
   margin-top: 1rem;
   cursor: pointer;

   &:hover {
    text-decoration: underline;
   }
`