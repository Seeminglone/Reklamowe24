import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ProductPage = () => {
  const { category, item } = useParams();

  return (
    <div>
      <h2>Product Page</h2>
      <Container>
        <h3>{category}</h3>
        <p>{item ? item : null}</p>
      </Container>
    </div>
  );
};

export default ProductPage;
