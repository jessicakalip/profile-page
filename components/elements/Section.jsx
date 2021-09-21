import styled, { css } from 'styled-components'

const Section = ({ children }) => (
    <StyledSection>{children}</StyledSection>
)

const StyledSection = styled.section`
    padding: 64px 0;
`

export default Section