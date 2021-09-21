import styled, { css } from 'styled-components'

const Button = ({ children, version }) => (
    <StyledButton version={version}>{children}</StyledButton>
)

const StyledButton = styled.button`
    border-radius: 8px;
    padding: 12px 20px;

    ${({ version }) => version == 'primary' && css`
        box-shadow: 0 0 0 2px #4dadc9;
        background: #4dadc9;
        color: #ffffff;
    `}

    ${({ version }) => version == 'secondary' && css`
        box-shadow: 0 0 0 2px #4dadc9;
        background: #ffffff;
        color: #4dadc9;
    `}
`

export default Button