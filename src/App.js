import "./App.css";
import Planet from "./Pages/Planet";
import Planets from "./data.json";
import Header from "./Components/Navigation";
import MobileHeader from "./Components/MobileHeader";
import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 541) {
      setShowMobileNavMenu(false);
    } else if (window.innerWidth < 541) {
      setShowMobileNavMenu(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 541) {
        setShowMobileNavMenu(false);
      } else if (window.innerWidth < 541) {
        setShowMobileNavMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {showMobileNavMenu ? <MobileHeader /> : <Header />}
      {!mobileNav ? (
        <Routes>
          {Planets.map(({ name, id }) => (
            <Route
              key={id}
              path={`/planets/${name}`}
              element={
                <Planet
                  data={Planets[id]}
                  showMobileNavMenu={showMobileNavMenu}
                  image={process.env.PUBLIC_URL + Planets[0].images.planet}
                />
              }
            ></Route>
          ))}
          <Route
            path="/"
            element={
              <Planet
                data={Planets[0]}
                showMobileNavMenu={showMobileNavMenu}
                image={process.env.PUBLIC_URL + Planets[0].images.planet}
              />
            }
          ></Route>
          <Route
            path="Planets-fact-site/"
            element={
              <Planet
                data={Planets[0]}
                showMobileNavMenu={showMobileNavMenu}
                image={process.env.PUBLIC_URL + Planets[0].images.planet}
              />
            }
          ></Route>
        </Routes>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
