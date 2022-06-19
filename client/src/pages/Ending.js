import React from "react";
//import components
import Button from "../components/Button/Button";
import Demon from "../assets/images/sprites/Demonlord.png";
import Title from "../components/Title/Title";

function handleSelection() {
  window.localStorage.removeItem("tokens");
  document.location = "/profile";
}

const Ending = () => {
  return (
    <main className="mb-5 min-height-100vh center">
      <img className="j-center center miw-100@sml w-med" src={Demon} alt="Sprite1"></img>
      <div className="">
        <Title
          title="Victory!"
          text1=" In disbelief, you brandish the Spirit Tokens you have collected on your journey. They glow with ethereal light and envelop the Demon Relphax in their magic. “Spirit Magic? My only weakness!”
          The demon cries in disbelief and rage as the tokens swirl their combined power around him until there is nothing left but blackend dirt and a wisp of sulfer-tinged smoke. Victory is yours -
          You have banished The Demon Relphax at last!"
        />
        <Button className="button b-rose c-white has-text-weight-semibold is-size-4" handleSelection={handleSelection}>
          Play Again?
        </Button>
      </div>
    </main>
  );
};

export default Ending;
