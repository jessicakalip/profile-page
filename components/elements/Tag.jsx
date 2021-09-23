import styled, { css } from 'styled-components'
import { colors } from '../../styles/config/theme'

const Tag = ({ children, clickable, selected, onClick, color, reversed }) => (
    <StyledTag clickable={clickable} selected={selected} onClick={onClick} color={color} reversed={reversed}>
        <span>{children}</span>
    </StyledTag>
)

const StyledTag = styled.div`
    text-transform: capitalize;
    background: ${colors.white};
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 4px 12px;
    font-size: 12px;

    ${({ color, clickable, selected, reversed }) => color && css`
        box-shadow: 0 0 0 1px ${colors[color]};
        color: ${colors[color]};

        ${clickable && css`
            cursor: pointer;

            &:hover {
                box-shadow: 0 0 0 1px ${colors[color]};
                background: ${colors.white};
                color: ${colors[color]};
            }
        `}

        ${reversed && css`
            box-shadow: 0 0 0 1px ${colors[color]};
            background: ${colors[color]};
            color: ${colors.white};
        `}

        ${selected && css`
            box-shadow: 0 0 0 1px ${colors[color]};
            background: ${colors[color]};
            color: ${colors.white};
        `}
    `}
`

export default Tag
