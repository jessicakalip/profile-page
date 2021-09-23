import styled, { css } from 'styled-components'
import { colors } from '../../styles/config/theme'

const Button = ({ children, version }) => (
    <StyledButton version={version}>{children}</StyledButton>
)

const StyledButton = styled.button`
    border-radius: 8px;
    padding: 12px 20px;

    ${({ version }) => version == 'primary' && css`
        box-shadow: 0 0 0 2px ${colors.darkBlue};
        background: ${colors.darkBlue};
        color: ${colors.white};
    `}

    ${({ version }) => version == 'secondary' && css`
        box-shadow: 0 0 0 2px ${colors.darkBlue};
        background: ${colors.white};
        color: ${colors.darkBlue};
    `}
`

export default Button