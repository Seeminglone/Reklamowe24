import React from "react";
import styled from "styled-components";
import KeyLockPng from "../../assets/keylock.png";
import BasketPng from "../../assets/basket.png";

import SearchModal from "./Search/Modal"

import OfertaGadzetow from "./OfertaGadzetow/index"
import OfertaTematyczna from "./OfertaTematyczna"
import RabatyIPromocje from "./RabatyIPromocje"


const Nav = styled.nav`
border-bottom: 1px solid #eeeeee;
position: sticky !important;
padding-bottom: 0.5rem !important;
padding-top: 0.5rem !important;
`;

const NavContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
padding: 0rem 1.5rem;
`;

const Ul = styled.ul`
list-style: none;
padding: 0;
display: flex;
align-items: center;
flex-direction: row;
gap: 1rem;
`;

const Span = styled.span``;

const Li = styled.li``;

const StyledButton = styled.button`
background: none;
border: none;
outline: none;
display: flex;
align-items: center;
cursor: pointer;
font-size: 20px;
padding: 0;
`;

const UserPanel = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-left: auto !important;
gap: 1rem;
`;

const Login = styled.div`
cursor: pointer;
`;

const Cart = styled.div`
cursor: pointer;
`;


function Navigation() {
 
  return (
    <Nav>
      <NavContainer>
        <Ul>
          <Span>
            <Li>
              <OfertaGadzetow/>
            </Li>
          </Span>
          <Li>
            <OfertaTematyczna/>
          </Li>
          <Li>
            <RabatyIPromocje/>
          </Li>
          <Li>
            <StyledButton>Kontakt</StyledButton>
          </Li>
        </Ul>
        <SearchModal/>
        <UserPanel>
          <Login>
            <img src={KeyLockPng} alt="Login" />
          </Login>
          <Cart>
            <img src={BasketPng} alt="Cart" />
          </Cart>
        </UserPanel>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
