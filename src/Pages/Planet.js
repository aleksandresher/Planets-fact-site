import PlanetMain from "../Components/PlanetMain";
import PlanetMainMobile from "../Components/PlanetMainMobile";
import PlanetSubInfo from "../Components/PlanetSubInfo";
import { useState } from "react";

function Planet({ data, showMobileNavMenu, image }) {
  const [active, setActive] = useState(true);
  return (
    <div>
      {showMobileNavMenu ? (
        <PlanetMainMobile
          firstImage={image}
          name={data.name}
          color={data.color}
          data={data}
          active={active}
          setActive={setActive}
          showMobileNavMenu={showMobileNavMenu}
        />
      ) : (
        <PlanetMain
          name={data.name}
          firstImage={image}
          color={data.color}
          data={data}
          active={active}
          setActive={setActive}
        />
      )}
      <PlanetSubInfo
        rotation={data.rotation}
        revolution={data.revolution}
        radius={data.radius}
        temperature={data.temperature}
      />
    </div>
  );
}

export default Planet;
