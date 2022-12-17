import { useState, useEffect } from "react";
import styled from "styled-components";

function PlanetMain({ name, data, color, active, setActive, firstImage }) {
  const [subPage, setSubPage] = useState("overview");
  const [image, setImage] = useState(firstImage);
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
      <ImageContainer>
        <Image src={image} alt="planet"></Image>
        {geologyImage ? <GeologyImage src={geologyImage}></GeologyImage> : ""}
      </ImageContainer>

      <InfoContainer>
        <div>
          <PlanetName>{name}</PlanetName>
          <PlanetContent>{data[subPage].content}</PlanetContent>
          <SourceContainer>
            <SourceText>Source :</SourceText>
            <SourceLink href={data[subPage].source}>Wikipedia</SourceLink>
            <SourceIcon
              src={process.env.PUBLIC_URL + "/assets/icon-source.svg"}
            ></SourceIcon>
          </SourceContainer>
        </div>

        <Btns>
          <FirstButton
            onClick={() => firstBtnHelper("overview")}
            color={color}
            active={active}
          >
            <ButtonNumber>01</ButtonNumber>
            <p>overview</p>
          </FirstButton>

          <SubButton onClick={() => secondBtnHelper("structure")} color={color}>
            <ButtonNumber>02</ButtonNumber>
            <p>structure</p>
          </SubButton>

          <SubButton onClick={() => thirdBtnHelper("geology")} color={color}>
            <ButtonNumber>03</ButtonNumber>
            <p>Surface Geology</p>
          </SubButton>
        </Btns>
      </InfoContainer>
    </MainContainer>
  );
}

export default PlanetMain;

const MainContainer = styled.div`
  display: flex;
  gap: 130px;
  align-items: center;
  justify-content: space-around;
  padding: 80px 100px 20px 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 685px) {
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 440px) {
    width: 240px;
    height: 240px;
  }
`;

const PlanetName = styled.h1`
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  font-family: "Antonio", sans-serif;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
  @media (max-width: 685px) {
    font-size: 42px;
  }
`;

const PlanetContent = styled.p`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  width: 350px;
  height: 125px;
  font-family: "League Spartan", sans-serif;
  line-height: 25px;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 685px) {
    font-size: 10px;
    width: 250px;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  min-width: 250px;

  @media (max-width: 768px) {
    max-width: 130%;
  }
  @media (max-width: 440px) {
    max-width: 120%;
  }
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
`;

const SourceText = styled.p`
  font-size: 14px;
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
  font-size: 14px;
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
  flex-direction: column;
  height: 176px;
  width: 350px;
  margin-top: 60px;
  gap: 25px;

  @media (max-width: 768px) {
    width: 281px;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: 685px) {
    width: 220px;
  }
`;

const SubButton = styled.button`
  &:focus {
    background-color: ${(props) => props.color};
  }

  cursor: pointer;
  display: flex;
  width: 350px;
  height: 48px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  gap: 28px;
  background: none;
  align-items: center;
  letter-spacing: 2.57px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 28px;

  @media (max-width: 768px) {
    width: 281px;
  }
  @media (max-width: 685px) {
    width: 220px;
    justify-content: center;
    gap: 10px;
  }
`;

const ButtonNumber = styled.p`
  @media (max-width: 440px) {
    display: none;
  }
`;
const FirstButton = styled.button`
   {
    background-color: ${(props) => (props.active ? props.color : "")};
  }

  cursor: pointer;
  display: flex;
  width: 350px;
  height: 48px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  font-family: "League Spartan", sans-serif;
  gap: 28px;
  background: none;
  align-items: center;
  letter-spacing: 2.57px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 28px;

  @media (max-width: 768px) {
    width: 281px;
  }
  @media (max-width: 685px) {
    width: 220px;
    justify-content: center;
  }
`;
