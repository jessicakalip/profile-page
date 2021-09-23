import styled from 'styled-components'
import { colors } from '../../styles/config/theme'

const Footer = ({ children }) => (
    <StyledFooter>
        <div>{children}</div>
    </StyledFooter>
)

const StyledFooter = styled.div`
    border-top: 1px solid #eaeaea;
    background-color: #ffffff;
    position: fixed;
    padding: 16px;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        align-items: center;
        display: flex;
        gap: 32px;

        a {
            transition: background-color 150ms ease;
            background-color: ${colors.blue};
            border-radius: 8px;
            color: #ffffff;
            font-size: 26px;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: ${colors.grey};
            }
        }
    }
`

export default Footer