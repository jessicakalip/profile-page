import styled, { css } from 'styled-components'

const Footer = ({ children }) => (
    <StyledFooter>{children}</StyledFooter>
)

const StyledFooter = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #D3EEE1;
    height: 50px;
    font-size: 30px;
    color: #D3EEE1;
        cursor: pointer;
`

export default Footer