import React from "react";
// components
import Title from "../components/Title/Title";
import Header from "../components/Header";
import BossGame from "../components/Challenges/BossGame";

const BossFight = () => {
  return (
    <>
      <Header></Header>
      <main className="">
        <Title
          title="Your destiny awaits! Will you be the one to save Graveworld?"
          text1="Relphax regards you with a cruel gaze. Smoke billows from his nostrils and mouth as he speaks, “You think you can defeat me? You are puny and weak, and I am mighty. Okay then, show me what you’ve got."
          text2="Harness the power of Spirit Magic to defeat Relphax; you just need a couple good hits to do him in: Wave beats Flame; Flame beats Root; Root beats Wave"
        />
        <BossGame />
      </main>
    </>
  );
};

export default BossFight;
