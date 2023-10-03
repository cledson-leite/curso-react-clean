import styled from 'styled-components';
export const Container =styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    position: relative;

`
export const Field =styled.input`
    border: 1px solid ${({theme}) => theme.primaryLight};
    flex-grow: 1;
    line-height: 2.5rem;
    border-radius: 0.25rem;
    padding: 0 2.5rem 0 0.5rem;

    &:focus {
        outline-color: ${({theme}) => theme.primaryLight};
    }
`

export const Icon = styled.span`
    position: absolute;
    right: 0.5rem;
    cursor: help;
    color: ${({theme}) => theme.primaryLight};
    & svg {
        font-size: 1.5rem;
    }
`