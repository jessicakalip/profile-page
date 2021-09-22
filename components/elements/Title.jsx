import styled from 'styled-components'
import { screens } from '../../styles/config/theme'

const Title = ({ children, heading }) => (
    <div heading={heading}>
        {heading == 1 && <StyledH1>{children}</StyledH1>}
        {heading == 2 && <StyledH2>{children}</StyledH2>}
        {heading == 3 && <StyledH3>{children}</StyledH3>}
        {heading == 4 && <StyledH4>{children}</StyledH4>}
        {heading == 5 && <StyledH5>{children}</StyledH5>}
        {heading == 6 && <StyledH6>{children}</StyledH6>}
    </div>
)

const StyledH1 = styled.h1`
    letter-spacing: -1px;
    line-height: 96px;
    font-weight: 700;
    font-size: 80px;
    
    @media only screen and (max-width: ${screens.md}) {
        letter-spacing: -1px;
        line-height: 56px;
        font-weight: 600;
        font-size: 44px;
    }
`

const StyledH2 = styled.h2`
    letter-spacing: -1px;
    line-height: 76px;
    font-weight: 600;
    font-size: 60px;

    @media only screen and (max-width: ${screens.md}) {
        letter-spacing: -1px;
        line-height: 56px;
        font-weight: 600;
        font-size: 44px;
    }
`

const StyledH3 = styled.h3`
    letter-spacing: -1px;
    line-height: 56px;
    font-weight: 600;
    font-size: 44px;
`

const StyledH4 = styled.h4`
    letter-spacing: -1px;
    line-height: 44px;
    font-weight: 600;
    font-size: 32px;
`

const StyledH5 = styled.h5`
    letter-spacing: 0px;
    line-height: 36px;
    font-weight: 600;
    font-size: 24px;
`

const StyledH6 = styled.h6`
    letter-spacing: 0px;
    line-height: 32px;
    font-weight: 600;
    font-size: 20px;
`

export default Title
