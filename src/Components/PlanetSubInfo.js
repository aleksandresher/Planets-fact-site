import styled from "styled-components";

function PlanetSubInfo({ rotation, revolution, radius, temperature }) {
  return (
    <SubInfoContainer>
      <Box>
        <BoxHeader>Rotation Time</BoxHeader>
        <BoxText>{rotation}</BoxText>
      </Box>

      <Box>
        <BoxHeader>Revolution Time</BoxHeader>
        <BoxText>{revolution}</BoxText>
      </Box>

      <Box>
        <BoxHeader>Radius</BoxHeader>
        <BoxText>{radius}</BoxText>
      </Box>

      <Box>
        <BoxHeader>Average Temp.</BoxHeader>
        <BoxText>{temperature}</BoxText>
      </Box>
    </SubInfoContainer>
  );
}
export default PlanetSubInfo;

const SubInfoContainer = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 56px;
  gap: 50px;
  padding: 0px 100px 0px 110px;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 0px 30px 0px 30px;
  }
  @media (max-width: 685px) {
    justify-content: center;
    gap: 15px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 128px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 985px) {
    width: 200px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 164px;
    height: 88px;
  }

  @media (max-width: 685px) {
    width: 120px;
    height: 70px;
  }
  @media (max-width: 440px) {
    width: 327px;
    height: 48px;
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 24px 13px 24px;
  }
`;

const BoxHeader = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 440px) {
    font-size: 8px;
  }
`;

const BoxText = styled.p`
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  letter-spacing: -1.5px;

  @media (max-width: 985px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 440px) {
    font-size: 20px;
  }
`;
