import styled from 'styled-components';
export const Container = styled.button`
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
    line-height: 3.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: none;
    margin-top: 2rem;

    &:hover {
        opacity: 0.9;
    }
`