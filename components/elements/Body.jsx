import styled, { css } from 'styled-components'

const Body = ({ children }) => (
    <StyledBody>{children}</StyledBody>
)

const StyledBody = styled.p`
    text-align: center;
`

export default Body