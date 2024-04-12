import React from "react";
import styled from "styled-components";

import jsonData from "./DoBiura.json";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Title = styled.div`
  color: #000;
  font-weight: 700;
  text-decoration: none;
  transition: 0.3s;
  white-space: nowrap;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #888;
  }
`;

const Ul = styled.ul`
  padding-left: 1.2rem;
  list-style-type: disc;
`;

const Link = styled.a`
  color: #000;
  font-size: 14px;
  margin-bottom: 4px;
  text-decoration: none;
  transition: 0.3s;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: #888;
  }
`;
export default function DoBiura() {
  return (
    <Container>
      <div>
        <Title>Gadżety biurowe</Title>
        <Ul>
          {jsonData["Gadżety biurowe"].map((item, index) => (
            <li key={index}>
              <Link>{item}</Link>
            </li>
          ))}
        </Ul>
      </div>

      <div>
        <Title>Długopisy reklamowe</Title>
        <Ul>
          {jsonData["Długopisy reklamowe"].map((item, index) => (
            <li key={index}>
              <Link>{item}</Link>
            </li>
          ))}
        </Ul>
      </div>
      <div>
        <Title>Inne</Title>
        <Ul>
          {jsonData["Inne"].map((item, index) => (
            <li key={index}>
              <Link>{item}</Link>
            </li>
          ))}
        </Ul>
      </div>
    </Container>
  );
}
