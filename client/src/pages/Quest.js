import React, { useState, useEffect } from "react";
// components
import Header from "../components/Header";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import TrophyTag from "../components/TrophyTag/TrophyTag";
import Overcast from "../img/OVERCAST_AdobeStock_452594013_preview.m4a";
import Tiger from "../img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";

// Quest page is hub for how User navigates to 'Spirit Challenges'
const Quest = ({ handleMusicChange }) => {
  useEffect(() => {
    handleMusicChange(Overcast);
    return () => {
      handleMusicChange(Tiger);
    };
  }, []);

  // sets tokenArray to state
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    // reads/sets token array from local storage
    const tokenArray = JSON.parse(localStorage.getItem("tokens"));
    setTokens(tokenArray);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="pb-6">
        {/* Challenge 1: Desert Ruin */}
        <section className="">
          <Title
            title="Graveworld needs you, {userHero}!"
            text1="The demon Relphax has breached into Graveworld and threatens the realm. Only spirit magic can banish him once and for all. Seek aid from the spirits that reside throughout Graveworld then confront the demon!"
          />
          <div className="box b-white c-navy has-text-centered m-4 p-2 p-relative">
            <Card
              title="The Desert Ruin"
              text="A once-proud castle torn asunder by time offers protection from an approaching storm. Perhaps you’ll find something inside to help you on your journey"
              className="b-taupe c-navy"
            />
            {/* checks to see if array exists, then loops through token array. If flame token is present, marks challenge as complete */}
            {tokens?.filter((token) => token.name === "Flame Token").length >
            0 ? (
              <TrophyTag>Quest Complete!</TrophyTag>
            ) : (
              <Button link="/theruin">Explore the ruin</Button>
            )}
          </div>
        </section>

        {/* Challenge 2: Ship Graveyard */}
        <section className="">
          <div className="box b-white c-navy has-text-centered m-4 p-2 p-relative">
            <Card
              title="The Ship Graveyard"
              text="Decaying ships create a land mass that may be worth checking out; perhaps there will be treasure!"
              className="b-taupe c-navy"
            />
            {/* checks to see if array exists, then loops through token array. If wave token is present, marks challenge as complete */}
            {tokens?.filter((token) => token.name === "Wave Token").length >
            0 ? (
              <TrophyTag>Quest Complete!</TrophyTag>
            ) : (
              <Button link="/thegraveyard">Explore the graveyard</Button>
            )}
          </div>
        </section>

        {/* Challenge 3: Evernight Forest */}
        <section className="">
          <div className="box b-white c-navy has-text-centered m-4 p-2 p-relative">
            <Card
              title="The Evernight Forest"
              text="This forest is rumored to be haunted...ghosts are just friends without bodies, right?"
              className="b-taupe c-navy"
            />
            {/* checks to see if array exists, then loops through token array. If root token is present, marks challenge as complete */}
            {tokens?.filter((token) => token.name === "Root Token").length >
            0 ? (
              <TrophyTag>Quest Complete!</TrophyTag>
            ) : (
              <Button link="/theforest">Explore the forest</Button>
            )}
          </div>
        </section>

        {/* when 3 tokens are earned, display DemonChallenge component */}
        {tokens?.length === 3 ? (
          <div className="box b-rose c-white has-text-centered m-4 p-2">
            <Card
              title="Time to Face the Demon"
              text="You have journeyed across Graveworld in search of the Demon Relphax’s lair. With the spirit tokens you have collected, you just may stand a chance at banishing him once and for all. You confront Relphax at last...but will you win?"
            />
            <Button
              className="button b-white c-rose mt-2 has-text-weight-semibold"
              link="/bossfight"
            >
              Face Relphax
            </Button>
          </div>
        ) : (
          <Button className="is-invisible" link="/bossfight">
            Time to Face the Demon
          </Button>
        )}
      </main>
    </>
  );
};

export default Quest;
