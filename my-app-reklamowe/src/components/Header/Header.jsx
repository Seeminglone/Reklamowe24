import React, { useState } from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const HeaderContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  height: 90px;
  display: flex;
  align-items: center !important;
  @media (min-width: 992px) {
    position: static;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 0rem 1.5rem;
  box-sizing: border-box;
`;
const HeaderContext = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;
const StyledImage = styled.img`
  width: 175px;
  aspect-ratio: auto 175 / 55;
  height: 55px;
`;
const HeaderLogo = styled.div``;
const HeaderContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const ContactMail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;
const StyledButton = styled.button`
  background-color: #132233;
  border-color: #132233;
  color: #fff;
  font-size: 1rem;
  white-space: nowrap;
  border-radius: 50px;
  padding: 0.375rem 16px;
  padding-bottom: 12px;
  padding-top: 12px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: 1px solid #132233;
  transition: all 0.2s linear;

  &:hover {
    background-color: #000;
    border-color: #000;
  }
`;
const ContactPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

function Header() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleClickShowEMail = () => {
    setShowEmail(true);
  };

  const handleClickShowPhone = () => {
    setShowPhone(true);
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderContext>
          <HeaderLogo>
            <StyledImage src={logo} alt="logo-reklamowe24"></StyledImage>
          </HeaderLogo>
          <HeaderContact>
            <ContactMail>
              <EmailOutlinedIcon
                sx={{ color: "black", width: "37px", height: "29px" }}
              />
              {showEmail ? null : <span>biuro@</span>}
              {showEmail ? <a href="mailto:biuro@reklamowe24.pl" style={{color:"#0a94d6"}}>biuro@reklamowe24.pl</a> : null}
              {showEmail ? null : (
                <StyledButton onClick={handleClickShowEMail}>
                  Pokaż
                </StyledButton>
              )}
            </ContactMail>
            <ContactPhone>
              <LocalPhoneOutlinedIcon
                sx={{ color: "black", width: "37px", height: "29px" }}
              />
              {showPhone ? null : <span>tel. 42</span>}
              {showPhone ? <a href="mailto:biuro@reklamowe24.pl" style={{color:"#0a94d6"}}>tel. 42 630 55 15</a> : null}
              {showPhone ? null : (
                <StyledButton onClick={handleClickShowPhone}>
                  Pokaż
                </StyledButton>
              )}
            </ContactPhone>
          </HeaderContact>
        </HeaderContext>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
