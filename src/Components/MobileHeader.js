import { useState } from "react";
import styled from "styled-components";
import MobileNavBar from "./MobileNavigation";

function MobileHeader() {
  const [show, setShow] = useState(false);
  function toggleNavBar() {
    setShow((prev) => !prev);
  }

  return (
    <HeaderContainer>
      <Header>The Planets</Header>
      {show ? <MobileNavBar toggleNavBar={toggleNavBar} /> : ""}
      <NavIcon
        src={process.env.PUBLIC_URL + "/assets/navIcon.png"}
        onClick={toggleNavBar}
      ></NavIcon>
    </HeaderContainer>
  );
}

export default MobileHeader;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px 0px 24px;
`;
const Header = styled.h1`
  font-size: 28px;
  font-weight: 400;
  font-family: "Antonio", sans-serif;
  color: #fff;
  text-transform: uppercase;
`;
const NavIcon = styled.img`
  width: 24px;
  height: 17px;
`;
