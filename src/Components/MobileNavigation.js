import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

function MobileNavBar(toggleNavBar) {
  const [open, setOpen] = useState(true);
  function showNav() {
    setOpen((prev) => !prev);
    console.log("rendered");
  }
  return (
    <div>
      {open ? (
        <Nav>
          {data.map(({ name, id, color }) => (
            <Link to={`/planets/${name}`} key={id} color={color}>
              <Container onClick={showNav}>
                <DotAndName>
                  <Dot color={color}></Dot>
                  <Name>{name}</Name>
                </DotAndName>

                <Arrow
                  src={process.env.PUBLIC_URL + "/assets/arrow.png"}
                ></Arrow>
              </Container>
            </Link>
          ))}
        </Nav>
      ) : (
        ""
      )}
    </div>
  );
}
export default MobileNavBar;

const Nav = styled.div`
  display: flex;
  background-color: #070724;
  flex-direction: column;
  width: 100%;
  padding: 24px 24px 24px 24px;

  height: 100%;

  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 100;

   {
    a:link {
      text-decoration: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%
  align-content: center;
  padding-right:10px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
  height:70px;
    
    

  
`;
const DotAndName = styled.div`
  display: flex;
  width: 136px;
  gap: 40px;

  align-items: center;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;

const Name = styled.p`
  font-size: 15px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
  color: #fff;
`;
const Arrow = styled.img`
  width: 4px;
  height: 8px;
  align-self: center;
`;
