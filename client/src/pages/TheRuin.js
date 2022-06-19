import React, { useEffect } from "react";
import Header from "../components/Header";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import DesertQuiz from "../components/Challenges/DesertQuiz";
import Overcast from "../img/OVERCAST_AdobeStock_452594013_preview.m4a";
import Tiger from "../img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";

// this page hosts The Desert Ruin story and component
const TheRuin = ({ handleMusicChange }) => {
  useEffect(() => {
    handleMusicChange(Overcast);
    return () => {
      handleMusicChange(Tiger);
    };
  }, []);
  // challenge TODOs here
  //

  return (
    <>
      <Header></Header>
      <main className="column">
        {/* This section sets the scene for the story */}
        <Title
          title="The Desert Ruin"
          text1="You enter the desert ruin to escape the harsh sunlight. You see a dim light further inside - another traveller, perhaps? As you approach a clearing, you discover it’s not a person at all - it’s a spirit! The light hovers in midair, and speaks, 'I can’t remember the last time I had visitors; I’ve been alone so long I’ve forgotten who I am. Help me remember, and I’ll return the favor.'"
          text2="You need all the support you can get to banish the demon, and if this ally is as powerful as they say it would be worth helping out."
        />
        <figure className="columns is-centered is-mobile  ">
          <img src={require("../assets/images/sprites/ghost1.png")} alt="an 8-bit rendering of a brown ghost" className="column is-one-third-mobile is-one-fifth-tablet is-one-fifth-desktop" />
        </figure>

        <DesertQuiz />
      </main>
    </>
  );
};

export default TheRuin;
