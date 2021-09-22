import styled from 'styled-components'
import { Anchor, Footer } from "../elements";

const Template = ({ children }) => (
    <StyledTemplate>
       {children}
        <Footer>
            <Anchor href="https://github.com/jessicakalip">
            <i class="fab fa-github-square"></i>
            </Anchor>

            <Anchor href="https://www.linkedin.com/in/jessica-kalip/">
            <i class="fab fa-linkedin"></i>
            </Anchor>

            <Anchor href="mailto:jessicakalip@gmail.com">
            <i class="fas fa-envelope-square"></i>
            </Anchor>

            <Anchor href="https://drive.google.com/file/d/10UGdA-usuTiCKw2Sq7Wp5p2mvZs7qLWV/view?usp=sharing">
            <i class="fas fa-file"></i>
            </Anchor>
        </Footer>
    </StyledTemplate>
)

const StyledTemplate = styled.div``

export default Template
