import styled from 'styled-components'
import { screens } from '../../styles/config/theme'

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.div`
    max-width: ${screens.md};
    position: relative;
    margin-right: auto;
    margin-left: auto;
    padding: 0 32px;
    width: 100%;

    @media only screen and (min-width: ${screens.md}) {
        padding: 0 96px;
    }
`

export default Container
