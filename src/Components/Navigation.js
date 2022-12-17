import data from "../data.json";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <HeaderContainer>
      <Header>the planets</Header>
      <NavBar>
        {data.map(({ name, id, color }) => (
          <Link to={`/planets/${name}`} key={id} color={color}>
            {name}
          </Link>
        ))}
      </NavBar>
    </HeaderContainer>
  );
}

export default Navigation;

const HeaderContainer = styled.div`
  display: flex;
  height: 85px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 36px 0px 36px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  mix-blend-mode: normal;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 160px;
    padding: 32px 20px 32px 20px;
  }
  @media (max-width: 685px) {
  }
`;

const Header = styled.h1`
  font-size: 28px;
  color: #fff;
  font-weight: 400;
  letter-spacing: -1.05px;
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
`;
const NavBar = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 685px) {
    gap: 30px;
  }
  @media (max-width: 590px) {
    gap: 20px;
`;
const Link = styled(NavLink)`
  font-size: 11px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  text-decoration: none;

  &.active {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.color};
    text-underline-offset: -45px;
    text-decoration-thickness: 4px;
  }

  @media (max-width: 768px) {
    &.active {
      text-decoration: none;
    }
  }
`;
