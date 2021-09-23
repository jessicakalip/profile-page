import { useState } from "react";
import styled, { css } from "styled-components";

import Template from "../components/templates";
import {
  Anchor,
  Container,
  Section,
  Spacer,
  Tag,
  Title,
} from "../components/elements";
import { colors } from "../styles/config/theme";
import projects from "../sources/projects.json";
import tags from "../sources/tags.json";

const Portfolio = () => {
  const [items, setItems] = useState([]);

  const handleClick = (x) => {
    if (items.includes(x)) setItems(items.filter((n) => n !== x));
    else setItems([...items, x]);
  };

  return (
    <Template>
      <Section>
        <Container>
          <Anchor href="/" version="primary">
            Return to homepage
          </Anchor>

          <Spacer size="md" />

          <Title heading={3}>Portfolio</Title>

          <Spacer size="sm" />

          <p>Discover my projects, and let's grab a coffee!</p>

          <Spacer size="md" />

          <StyledTags>
            {tags.map((x, i) => (
              <Tag
                key={i}
                clickable
                selected={items.includes(x.tech)}
                onClick={() => handleClick(x.tech)}
                color={x.color}
              >
                {x.tech}
              </Tag>
            ))}
          </StyledTags>

          <Spacer size="lg" />

          <StyledPortfolio>
            {projects.map((item, index) =>
              items.length ? (
                item.tags.some((x) => items.includes(x)) && (
                  <PortfolioItem item={item} key={index} />
                )
              ) : (
                <PortfolioItem item={item} key={index} />
              )
            )}
          </StyledPortfolio>
        </Container>
      </Section>
    </Template>
  );
};

const PortfolioItem = ({ item }) => (
  <StyledPortfolioItem>
    <Anchor href={item.href} target="_blank">
      <Title heading={6}>
        {item.title}
        <i className="fas fa-link" />
      </Title>
    </Anchor>

    <Spacer size="sm" />

    <StyledTags>
      {item.tags.map((x, i) => (
        <Tag key={i} reversed color={tags.find((y) => y.tech == x).color}>
          {x}
        </Tag>
      ))}
    </StyledTags>

    <Spacer size="sm" />

    <p>{item.content}</p>
  </StyledPortfolioItem>
);

const StyledPortfolio = styled.div`
  ${({ theme }) => css`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    display: grid;

    @media only screen and (max-width: ${theme.screens.sm}) {
      grid-template-columns: unset;
    }

    h6 {
      display: flex;
      align-items: center;
      column-gap: 8px;

      > i {
        font-size: 16px;
        color: ${colors.grey};
      }
    }
  `}
`;

const StyledPortfolioItem = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid #eaeaea;
  padding: 24px 32px;
`;

const StyledTags = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 8px;
`;

export default Portfolio;
