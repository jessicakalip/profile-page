import Image from "next/image";
import styled, { css } from "styled-components";

import Template from "../components/templates";
import {
  Anchor,
  Container,
  Section,
  Spacer,
  Title,
} from "../components/elements";

const Home = () => (
  <Template>
    <Section>
      <Container>
        <StyledHeader>
          <Image
            src="/jess.jpeg"
            alt="My face"
            height={200}
            width={200}
            objectFit="contain"
          />
          <Title heading={2}>Jessica Kalip</Title>
        </StyledHeader>
        <StyledBody>
          <Spacer size="lg" />

          <Title heading={5}>Hi there! Welcome to my portfolio website!</Title>
          <Spacer size="sm" />
          <p>
            I’m Jessica Kalip, a Full-Stack Developer with 2 years of
            programming experience. I transitioned from consulting to a
            programming career with the{" "}
            <b> Le Wagon full-stack web development bootcamp</b> in Bali (June
            2021) and have continued on to work full-time (Jan 2022 - Jul 2023),
            and then freelance (August 2023 - January 2024) for{" "}
            <b>Collato, an AI Product Assistant startup based in Berlin.</b>
          </p>
          <Spacer size="sm" />
          <p>
            I am <b>currently open to full-time positions</b> as a
            <b> Full-Stack Web Developer</b> and am looking to create impactful
            products in a company with supportive teammates, and a fun learning
            environment!
          </p>
          <Spacer size="sm" />
          <p>
            Over the past 2 years, I’ve learnt and grown so much as a developer
            with Collato, working on features in their main app, tackling pesky
            bugs, as well as being responsible for maintaining and rebranding
            their{" "}
            <a
              href="http://www.collato.com"
              style={{ "text-decoration": "underline" }}
              target="_blank"
              rel="noreferrer"
            >
              Landing Page
            </a>
            .
          </p>
          <Spacer size="sm" />
          <p>
            Examples of some of the tasks I undertook during my time with
            Collato were writing <b>end-to-end tests</b> in Cypress,{" "}
            <b>unit tests </b>
            with Jest, developing their <b>Version History feature</b>, setting
            up the <b>Storybook Component Library</b>, setting up{" "}
            <b>Gatsby Live Preview </b>
            to aid the growth team in visualising changes before it goes live,
            making the app <b>mobile-responsive</b>, as well as creating the{" "}
            <b>Podcast page</b> on our Landing Page.
          </p>
          <Spacer size="md" />
          <Title heading={5}>My Tech Stack includes</Title>
          <p>
            <Spacer size="sm" />
            <b>Programming Languages:</b> Javascript / Ruby / Python
            <br />
            <b>Front End Frameworks:</b> React / Next.js / Gatsby / Ruby on
            Rails / Typescript / Zustand / Redux / Storybook Component Library /
            Styled Components / Tailwind CSS / HTML / CSS / Bootstrap
            <br />
            <b>Back End Frameworks:</b> Sanity CMS / Apollo / GraphQL / TypeORM
            / RDS / PostgreSQL
            <br />
            <b>Testing Frameworks:</b> Cypress / Jest
            <br />
            <b>Others:</b> Segment / Google Analytics / Hubspot
          </p>
          <Spacer size="md" />
          <p>
            I’m currently learning Blender with{" "}
            <a
              href="https://www.udemy.com/course/blendertutorial/"
              style={{ "text-decoration": "underline" }}
              target="_blank"
              rel="noreferrer"
            >
              this
            </a>{" "}
            comprehensive course as I hope to make beautiful visuals to
            incorporate into my websites, and maybe one day I’ll get to create
            amazing games and videos, who knows!
          </p>
          <Spacer size="sm" />
          <p>
            Whenever I’m not coding, you’ll find me hanging out with my dogs (or
            anyones dogs…) 🐶, enjoying ALL of Taylor Swift’s 🎤 albums on my
            new vinyl record player, or diving in Bali 🐠! My other passions
            include traveling around the world, learning new languages, and
            figuring out where the best foods are.
          </p>
          <Spacer size="sm" />
          <p>
            <b>Languages</b> I speak (or try to…): English (native) | Indonesian
            (decent enough) | Chinese (decent enough) | German (B2) | Spanish
            (A2)
          </p>
          <Spacer size="sm" />
          <p>
            If you are interested in my current work, and would like to have me
            onboard for your next project, please contact me through one of the
            platforms below!
          </p>

          <Spacer size="md" />

          <Anchor href="/portfolio" version="primary">
            Check out my projects here!
          </Anchor>
        </StyledBody>
      </Container>
    </Section>
  </Template>
);

const StyledHeader = styled.div`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    gap: 24px;

    img {
      // you can also set a theme to store all your values at one place, see _app.js
      border-radius: ${theme.radii.mx};
    }
  `}
`;

const StyledBody = styled.div`
  text-align: start;
`;

export default Home;
