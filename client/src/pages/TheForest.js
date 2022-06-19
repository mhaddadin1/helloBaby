import React, { useEffect } from "react";
import ForestQuiz from "../components/Challenges/ForestQuiz";
import Header from "../components/Header";
// import Auth from "../utils/auth";
import Title from "../components/Title/Title";
import Overcast from "../img/OVERCAST_AdobeStock_452594013_preview.m4a";
import Tiger from "../img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";

// this page hosts The Desert Ruin story and component
const TheForest = ({ handleMusicChange }) => {
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
      <main>
        {/* This section sets the scene for the story */}
        <Title
          title="The Evernight Forest"
          text1="You pass through an eerie forest where the treecover is so dense it blocks out the sun. As you travel further in you begin to get the sense that something is following you! You turn to confront it, and find a wispy being staring at you. Head cocked it asks, 'I’ve been waiting for someone to pass though. My friends need help, and I can’t do it alone! If you give me your aid, I’ll return the favor!'"
          text2="Might as well help out, it feels good to do good! And if you're lucky you might just show this spirit that you're worthy of a boon"
        />
        <figure className="columns is-centered is-mobile  ">
          <img
            src={require("../assets/images/sprites/ghost3.png")}
            alt="an 8-bit rendering of a green ghost"
            className="column is-one-third-mobile is-one-fifth-tablet is-one-fifth-desktop"
          />
        </figure>

        <ForestQuiz />
      </main>
    </>
  );
};

export default TheForest;
