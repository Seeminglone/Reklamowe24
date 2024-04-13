import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import jsonData from "./DoBiura.json";
import { normalizePolishToEnglish } from "../../../../utils/helpers/NormalizeLanguage";

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
export default function DoBiura({closeMenu }) {
  const navigate = useNavigate();

  const handleClick = (category, item) => {
    const categoryWithHyphens = normalizePolishToEnglish(category).replace(
      /\s+/g,
      "-"
    );

    const itemWithHyphens = item
      ? normalizePolishToEnglish(item).replace(/\s+/g, "-")
      : null;

    let url = `/products/${encodeURIComponent(categoryWithHyphens)}`;
    if (item) {
      url += `/${encodeURIComponent(itemWithHyphens)}`;
    }
    navigate(url);
    closeMenu();
  };
  return (
    <Container>
      <div>
        <Title onClick={() => handleClick("Gadżety biurowe")}>
          Gadżety biurowe
        </Title>
        <Ul>
          {jsonData["Gadżety biurowe"].map((item, index) => (
            <li key={index}>
              <Link onClick={() => handleClick("Gadżety biurowe", item)}>
                {item}
              </Link>
            </li>
          ))}
        </Ul>
      </div>

      <div>
        <Title onClick={() => handleClick("Długopisy reklamowe")}>
          Długopisy reklamowe
        </Title>
        <Ul>
          {jsonData["Długopisy reklamowe"].map((item, index) => (
            <li key={index}>
              <Link onClick={() => handleClick("Długopisy reklamowe", item)}>
                {item}
              </Link>
            </li>
          ))}
        </Ul>
      </div>
      <div>
        <Title onClick={() => handleClick("Inne")}>Inne</Title>
        <Ul>
          {jsonData["Inne"].map((item, index) => (
            <li key={index}>
              <Link onClick={() => handleClick("Inne", item)}>{item}</Link>
            </li>
          ))}
        </Ul>
      </div>
    </Container>
  );
}
