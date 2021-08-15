import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.bgColor};
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
    border:3px solid ${props => props.theme.borderColor};
`