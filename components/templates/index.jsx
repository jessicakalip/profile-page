import styled from 'styled-components'
import { Anchor, Footer } from "../elements";

const Template = ({ children }) => (
    <StyledTemplate>
       {children}
        <Footer>
            <Anchor href="https://github.com/jessicakalip">
                <i className="fab fa-github-square" />
            </Anchor>

            <Anchor href="https://www.linkedin.com/in/jessica-kalip/">
                <i className="fab fa-linkedin" />
            </Anchor>

            <Anchor href="mailto:jessicakalip@gmail.com">
                <i className="fas fa-envelope-square" />
            </Anchor>

            <Anchor href="https://drive.google.com/file/d/10UGdA-usuTiCKw2Sq7Wp5p2mvZs7qLWV/view?usp=sharing">
                <i className="fas fa-file" />
            </Anchor>
        </Footer>
    </StyledTemplate>
)

const StyledTemplate = styled.div`
    padding: 0 0 64px;
`

export default Template
