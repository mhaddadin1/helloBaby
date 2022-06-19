import React from "react";

// images
import Logo from "../img/graveworld-logo-real.png";

// components
import Button from "../components/Button/Button";

const Home = () => {
  return (
    <main className=" mb-5 min-height-100vh">
      <div className="center m-top m-bottom">
        <img
          className="j-center center miw-100@sml w-med"
          src={Logo}
          alt="Graveworld Logo"
        ></img>
      </div>
      <div>
        <Button
          link="/login"
          className="button bkg-red c-white font-bold n-border j-center center l-spacing p-3 uppercase zoom"
        >
          Press Start
        </Button>
      </div>
    </main>
  );
};

export default Home;
