import Image from "next/image";
import styled, { css } from "styled-components";

import Template from "../components/templates";
import {
  Anchor,
  Container,
  Section,
  Spacer,
  Title,
  Body,
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
        <Body>
          <Spacer size="lg" />

          <p>Welcome to my profile page!</p>

          <Spacer size="sm" />

          <p>
            I am a 25 year old <b>Full-Stack Developer</b> and I recently
            graduated from <b>Le Wagon</b>, a full-stack web development
            bootcamp, and have also previously completed the{" "}
            <b>Introduction to Python Programming</b> course by{" "}
            <b>Hackwagon Academy</b>.
          </p>

          <Spacer size="sm" />

          <p>
            I am currently seeking full-time remote positions as a{" "}
            <b>Junior Web Developer</b> and am looking to create beautiful and
            impactful products in a company with a remote-first culture,
            supportive teammates, and a fun learning environment!
          </p>

          <Spacer size="sm" />

          <p>
            As a bootcamp graduate, I not only understand the theoretical
            concepts on coding, but am able to{" "}
            <b>apply the necessary practical skills</b> to create web
            applications. Having a fresh start in the coding industry, I am also
            able to quickly absorb and pick up your company best-practices and
            coding standards. In the past two years, I was a Strategy
            Consultant, and believe that the transferrable skills I have, such
            as <b>interviewing stakeholders</b>,{" "}
            <b>conducting impact assessments</b>, and <b>data analysis</b> will
            allow me to be an asset to your company.
          </p>

          <Spacer size="sm" />

          <p>
            My current tech stack revolves around <b>Ruby on Rails</b> and{" "}
            <b>Javascript</b>. I was exposed to <b>API management</b>, setting
            up back-end infrastructures and designing components on the front. I
            currently have two apps under my belt, <em>Plan It For Me</em>, a
            weekend trip itinerary planner, <em>Loan Me</em>, an online
            marketplace for friends, and counting.
          </p>

          <Spacer size="sm" />

          <p>
            I’m enthusiastic about building silly apps on the side for my own
            amusement, as well as going deeper into Javascript and its related
            frameworks. At the moment, I am learning <b>React</b> and{" "}
            <b>Redux</b> to improve my front-end skills, and am continuously
            learning and applying my skills.
          </p>

          <Spacer size="sm" />

          <p>
            If you are interested in my current work, and would like to have me
            onboard for your next project, please contact me through one of the
            platforms below!
          </p>

          <Spacer size="md" />

          <Anchor href="/portfolio" version="primary">
            Checkout my projects here!
          </Anchor>
        </Body>
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
    gap: 20px;
    font-family; 'Lobster', cursive;

    img {
      // you can also set a theme to store all your values at one place, see _app.js
      border-radius: ${theme.radii.mx};
    }
  `}
`;

export default Home;
