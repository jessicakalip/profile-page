import styled from 'styled-components'
import { Anchor, Footer } from "../elements";
import socials from "../../sources/social.json";

const Template = ({ children }) => (
    <StyledTemplate>
        {children}

        <Footer>
            {socials.map((item, i) => (
                <Anchor key={i} href={item.href} target="_blank">
                    <i className={item.icon} />
                </Anchor>
            ))}
        </Footer>
    </StyledTemplate>
)

const StyledTemplate = styled.div`
    padding: 0 0 64px;
`

export default Template
