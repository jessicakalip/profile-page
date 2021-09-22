import styled, { css } from 'styled-components'

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
            border: 1px solid #D3EEE1;
            background: white;
        }
    `}

    ${({ selected }) => selected && css`
        border: 1px solid #D3EEE1;
        background: #D3EEE1;
        color: white;
    `}
`

export default Tag
