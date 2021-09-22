import styled, { css } from 'styled-components'
import { colors } from '../../styles/config/theme'

const Tag = ({ children, clickable, selected, onClick }) => (
    <StyledTag clickable={clickable} selected={selected} onClick={onClick}>
        <span>{children}</span>
    </StyledTag>
)

const StyledTag = styled.div`
    border: 1px solid #eaeaea;
    text-transform: capitalize;
    background: #fafafa;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 4px 12px;
    color: #333333;
    font-size: 12px;

    ${({ clickable }) => clickable && css`
        cursor: pointer;

        &:hover {
            border: 1px solid ${colors.green};
            background: ${colors.white};
            color: ${colors.green};
        }
    `}

    ${({ selected }) => selected && css`
        border: 1px solid ${colors.green};
        background: ${colors.green};
        color: ${colors.white};
    `}
`

export default Tag
