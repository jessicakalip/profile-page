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
            height={150}
            width={150}
            objectFit="contain"
          />
          <Title heading={3}>Jessica Kalip</Title>
        </StyledHeader>

        <Spacer size="lg" />

        <p>Welcome to my profile page!</p>

        <Spacer size="sm" />

        <p>
          I am a 25 year old Full-Stack Developer and I recently graduated from
          Le Wagon, a full-stack web development bootcamp. I am currently
          seeking full-time remote positions as a Junior Web Developer. I am
          looking to create meaningful products in a company with a remote-first
          culture, supportive teammates, and a fun learning environment!
        </p>

        <Spacer size="sm" />

        <p>
          After several pivots in my career I learned to pick up skills and
          understand new concepts quickly. My current tech stack revolves around
          Ruby on Rails and Javascript. I was exposed to API management, setting
          up back-end infrastructures and designing components on the front.
        </p>

        <Spacer size="sm" />

        <p>
          I currently have two apps under my belt, “Plan It For Me”, a weekend
          trip itinerary planner, “Loan Me”, an online marketplace for friends,
          and counting. I’m enthusiastic about building silly apps on the side
          for my own amusement, as well as going deeper into Javascript and its
          related frameworks.
        </p>

        <Spacer size="md" />

        <Anchor href="/portfolio" version="primary">
          See my projects and lets grab a coffee.
        </Anchor>
      </Container>
    </Section>
  </Template>
);

const StyledHeader = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: 32px;

    @media only screen and (max-width: ${theme.screens.sm}) {
      flex-direction: column;
    }

    img {
      // you can also set a theme to store all your values at one place, see _app.js
      border-radius: ${theme.radii.mx};
    }
  `}
`;

export default Home;
