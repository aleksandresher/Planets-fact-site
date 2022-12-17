import { useState, useEffect } from "react";
import styled from "styled-components";

function PlanetMainMobile({ name, data, color, active, setActive }) {
  const [subPage, setSubPage] = useState("overview");
  const [image, setImage] = useState(
    process.env.PUBLIC_URL + data.images.planet
  );
  const [geologyImage, setGeologyImage] = useState("");

  function firstBtnHelper(name) {
    setSubPage(name);
    setImage(process.env.PUBLIC_URL + data.images.planet);
    setActive(true);
    setGeologyImage("");
  }
  function secondBtnHelper(name) {
    setSubPage(name);
    setImage(process.env.PUBLIC_URL + data.images.internal);
    setActive(false);
    setGeologyImage("");
  }
  function thirdBtnHelper(name) {
    setSubPage(name);
    setImage(process.env.PUBLIC_URL + data.images.planet);
    setActive(false);
    setGeologyImage(process.env.PUBLIC_URL + data.images.geology);
  }

  useEffect(() => {
    setSubPage("overview");
    setActive(true);
    setImage(process.env.PUBLIC_URL + data.images.planet);
    setGeologyImage("");
  }, [data]);

  return (
    <MainContainer>
      <Btns>
        <FirstButton
          onClick={() => firstBtnHelper("overview")}
          color={color}
          active={active}
        >
          <p>overview</p>
        </FirstButton>

        <SubButton onClick={() => secondBtnHelper("structure")} color={color}>
          <p>structure</p>
        </SubButton>

        <SubButton onClick={() => thirdBtnHelper("geology")} color={color}>
          <p>Surface</p>
        </SubButton>
      </Btns>

      <ImageContainer>
        <Image src={image} alt="planet"></Image>
        {geologyImage ? <GeologyImage src={geologyImage}></GeologyImage> : ""}
      </ImageContainer>

      <InfoContainer>
        <PlanetName>{name}</PlanetName>
        <PlanetContent>{data[subPage].content}</PlanetContent>
        <SourceContainer>
          <SourceText>Source :</SourceText>
          <SourceLink href={data[subPage].source}>Wikipedia</SourceLink>
          <SourceIcon
            src={process.env.PUBLIC_URL + "/assets/icon-source.svg"}
            alt="souce icon"
          ></SourceIcon>
        </SourceContainer>
      </InfoContainer>
    </MainContainer>
  );
}

export default PlanetMainMobile;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-left: 0px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 327px;
  margin: 0px 24px 0px 24px;
  justify-content: center;
  margin-right: 24px;
`;

const ImageContainer = styled.div`
  width: 256px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PlanetName = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  font-family: "Antonio", sans-serif;
  margin-bottom: 10px;
  align-self: center;
  margin-bottom: 25px;
`;

const PlanetContent = styled.p`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  width: 327px;
  height: 125px;
  font-family: "League Spartan", sans-serif;
  line-height: 25px;
  font-size: 11px;
  text-align: center;
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const GeologyImage = styled.img`
  width: 163px;
  height: 200px;
  position: absolute;
  right: 180px;

  @media (max-width: 985px) {
    right: 50px;
    width: 120px;
    height: 150px;
  }
`;

const SourceContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 5px;
  justify-content: center;
`;

const SourceText = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  font-family: "League Spartan", sans-serif;
  opacity: 0.5;

  @media (max-width: 685px) {
    font-size: 10px;
  }
`;
const SourceLink = styled.a`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  opacity: 0.5;
`;

const SourceIcon = styled.img`
  width: 12px;
  height: 12px;
  opacity: 0.5;
`;

const Btns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 51px;
  margin-top: 0px;
  gap: 0px;
  border-top: 1px solid rgba(216, 216, 216, 0.2);
  border-bottom: 1px solid rgba(216, 216, 216, 0.2);
  height: 50px;
  margin-left: 0px;
  margin-right: 0px;
  justify-content: space-around;
`;

const SubButton = styled.button`
 
  cursor: pointer;
  display: flex;
  width: 33%;
  border: none;
  font-size: 9px;
  justify-content:center;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  background: none;
  align-items: center;
  letter-spacing: 2.57px;
  text-transform: uppercase;
  

    &:focus{
    background-color:transparent;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.color};
    text-underline-offset: 18px;
    text-decoration-thickness: 4px;
    }
    
  }
`;

const FirstButton = styled.button`

  cursor: pointer;
  display: flex;
  width 33%;
  font-size: 9px;
 border:none;
 justify-content:center;
  height: 48px;
  color: #fff;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  background: none;
  align-items: center;
  letter-spacing: 2.57px;
  text-transform: uppercase;
 

    &:focus{
      background-color:transparent;
      text-decoration: underline;
      text-decoration-color: ${(props) => props.color};
      text-underline-offset: 18px;
      text-decoration-thickness: 4px;
      }
  }
`;
