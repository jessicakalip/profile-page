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

          <p>Welcome to my profile page!</p>

          <Spacer size="sm" />

          <p>
            I am a 25 year old <b>Full-Stack Developer</b> and I recently
            graduated from the{" "}
            <b>Le Wagon full-stack web development bootcamp</b> in Bali. After
            being first exposed to coding through the{" "}
            <b>Introduction to Python Programming</b> course by 
            <b>Hackwagon Academy</b> in Singapore, I decided to explore a career
            in coding with <b>Le Wagon</b>, which is the <b>most acclaimed</b>{" "}
            coding bootcamp worldwide on <em>Switchup</em>.
          </p>

          <Spacer size="sm" />

          <p>
            I am currently seeking full-time remote positions as a{" "}
            <b>Junior Web Developer</b> and am looking to create impactful
            products in a company with a remote-first culture, supportive
            teammates, and a fun learning environment!
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
            <b>Javascript</b>. I was exposed to <b>APIs</b>, setting up back-end
            infrastructures and designing components on the front. I currently
            have two apps under my belt, <em>Plan It For Me</em>, a weekend trip
            itinerary planner, <em>Loan Me</em>, an online marketplace for
            friends, and counting.
          </p>

          <Spacer size="sm" />

          <p>
            I’m enthusiastic about building my own apps on the side, as well as
            going deeper into Javascript and its related frameworks. At the
            moment, I am learning <b>React</b> and <b>Redux</b> to improve my
            front-end skills, and am continuously learning and applying my
            skills.
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
  text-align: center;
`;

export default Home;
