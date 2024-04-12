import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MovingIcon from "@mui/icons-material/Moving";

const InputSearch = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  font-size: inherit;
  padding: 0.5rem 1rem;
  line-height: 25.5px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  margin-bottom: 1rem;
`;

const PopularSearch = styled.div`
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;
`;

const PopularNameItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const NoFoundText = styled.span`
display: flex;
justify-content: center;`

const StyledLink = styled.a`
  background: #fff;
  border-top: 1px solid transparent;
  border-left: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  padding: 0.5rem 1rem;
  display: block;
  text-decoration: none;
  color: black;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};

  &:hover {
    background: #f8f9fa;
  }

  &.active {
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    color: #fff;
    border-top: 1px solid transparent !important;
  }

  &:active,
  &.clicked {
    background-color: #f8f9fa;
    border: 1px solid  #dee2e6;
    color: black;
  }

  &.first {
    border-top: 1px solid #dee2e6;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.last {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  &.border__none {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;

export default function PopularLinks({ open }) {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [searchLetter, setSearchLetter] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);
  const inputRef = useRef(null);
  const linksRef = useRef([
    { text: "Torby na zakupy", href: "/"},
    { text: "Bidony i butelki", href: "/", borderRadius: "0rem" },
    { text: "Torby bawełniane", href: "/", borderRadius: "0rem" },
    { text: "T-shirty", href: "/", borderRadius: "0rem" },
    { text: "Polary", href: "/", borderRadius: "0rem" },
  ]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }// eslint-disable-next-line
  }, [open, inputRef.current]);


  useEffect(() => {
    setFilteredLinks(
      linksRef.current.filter((link) =>
        link.text.toLowerCase().startsWith(searchLetter.toLowerCase())
      )
    );// eslint-disable-next-line
  }, [searchLetter]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      let nextIndex;
      if (focusedIndex === null) {
        nextIndex = event.key === "ArrowDown" ? 0 : filteredLinks.length - 1;
      } else {
        nextIndex =
          event.key === "ArrowDown"
            ? focusedIndex === filteredLinks.length - 1
              ? 0
              : focusedIndex + 1
            : focusedIndex === 0
            ? filteredLinks.length - 1
            : focusedIndex - 1;
      }
      if (nextIndex !== focusedIndex) {
        setFocusedIndex(nextIndex);
      }
    } else if (event.key === "Enter" && focusedIndex !== null) {
      window.location.href = filteredLinks[focusedIndex].href;
    }
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      handleKeyDown(event);
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };// eslint-disable-next-line
  }, [focusedIndex, filteredLinks]);

  const handleClick = (index, event) => {
    if (event.clientX !== undefined && event.clientY !== undefined) {
      setClickedIndex(index);
    }
    setFocusedIndex(index);
  };

  const handleMouseLeave = () => {
    setClickedIndex(null);
  };

  const handleSearchLetterChange = (event) => {
    setSearchLetter(event.target.value);
    setFocusedIndex(null);
  };

  
  useEffect(() => {
    if (focusedIndex !== null && focusedIndex >= filteredLinks.length) {
      setFocusedIndex(filteredLinks.length - 1);
    }// eslint-disable-next-line
  }, [filteredLinks]);

  return (
    <PopularSearch>
      <InputSearch
        type="text"
        onChange={handleSearchLetterChange}
        ref={inputRef}
        placeholder="Szukaj produktu"
      />
      {filteredLinks.length === 0 ? (
        <NoFoundText>
          Nie znaleziono żadnego produktu
        </NoFoundText>
      ) : (
        filteredLinks.map((link, index) => (
          <StyledLink
            key={index}
            href={link.href}
            borderRadius={(filteredLinks.length === 1 && index === 0) ? "0.5rem" : link.borderRadius}
            tabIndex="0"
            onFocus={() => setFocusedIndex(index)}
            onClick={(event) => handleClick(index, event)}
            onMouseLeave={handleMouseLeave}
            className={`
              ${focusedIndex === index ? "active" : ""} 
              ${clickedIndex === index ? "clicked" : ""} 
              ${index === 0 ? "first" : ""} 
              ${filteredLinks.length === 1 && index === 0 ? "border__none" : ""}
              ${index === filteredLinks.length - 1 && !(filteredLinks.length === 1 && index === 0) ? "last" : ""} 
              ${link.className}
            `}
          >
            <small style={{ fontSize: "12px" }}>Popularne</small>
            <PopularNameItems>
              <MovingIcon sx={{ fontSize: "19px" }} />
              <strong>{link.text}</strong>
            </PopularNameItems>
          </StyledLink>
        ))
      )}
    </PopularSearch>
  );
}
