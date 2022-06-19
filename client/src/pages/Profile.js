import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

// components
import Flametoken from "../assets/images/sprites/flameToken.png";
import Roottoken from "../assets/images/sprites/rootToken.png";
import Wavetoken from "../assets/images/sprites/waveToken.png";
import Button from "../components/Button/Button";
import Header from "../components/Header";
import Card from "../components/Card/Card";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const char1 = require("../assets/images/sprites/char1.png");
  const char2 = require("../assets/images/sprites/char2.png");
  const char3 = require("../assets/images/sprites/char3.png");
  const char4 = require("../assets/images/sprites/char4.png");

  const [avatarImg, setAvatarImg] = useState("../assets/images/sprites/char1.png");

  const [earnedTk, setEarnedTk] = useState([]);
  const [userHero, setUserHero] = useState("");
  const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {
    const charImg = localStorage.getItem("charAv");
    setAvatarImg(eval(`char${charImg}`));
    const heroName = data?.user.heroName;
    setUserHero(heroName);
  });

  useEffect(() => {
    const tokenArray = JSON.parse(localStorage.getItem("tokens"));
    setEarnedTk(tokenArray);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="center">
        <div className="center m-top m-bottom">
          <img className="j-center center miw-100@sml w-15" src={avatarImg} alt="Sprite1"></img>
          {loading ? <div>loading</div> : <h1 className="c-white font-reg">{userHero}</h1>}
          <section className="box m-6">
            <Card
              title="Welcome to Graveworld!"
              text="A realm of magic, mystery, and adventure awaits you. Do you have what it takes to save the realm from the deadly foe who lurk in the shadows? Start your quest below and find out!"
            />
            <Button className="" link="/quest" type="submit">
              Start Your Quest
            </Button>
          </section>
        </div>
        <h2 className="c-white font-reg m-bottom">Spirit Tokens</h2>
        <div className="d-flex m-bottom">
          {earnedTk?.filter((token) => token.name === "Flame Token").length > 0 ? (
            <img className="img w-10 " src={Flametoken} alt="Sprite1"></img>
          ) : (
            <img className="img w-10 opacity" src={Flametoken} alt="Sprite1"></img>
          )}
          {earnedTk?.filter((token) => token.name === "Root Token").length > 0 ? (
            <img className="img w-10 " src={Roottoken} alt="Sprite1"></img>
          ) : (
            <img className="img w-10 opacity" src={Roottoken} alt="Sprite1"></img>
          )}
          {earnedTk?.filter((token) => token.name === "Wave Token").length > 0 ? (
            <img className="img w-10 " src={Wavetoken} alt="Sprite1"></img>
          ) : (
            <img className="img w-10 opacity" src={Wavetoken} alt="Sprite1"></img>
          )}
        </div>
      </main>
    </>
  );
};

export default Profile;
