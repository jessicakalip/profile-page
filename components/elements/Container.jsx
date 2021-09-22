import styled from 'styled-components'

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.div`
    max-width: ${({ theme }) => theme.screens.md};
    position: relative;
    margin-right: auto;
    margin-left: auto;
    padding: 0 100px;
    width: 100%;
`

export default Container
