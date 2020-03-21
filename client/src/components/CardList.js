import React from "react";
import PlayerCard from "./PlayerCard";

const CardList = props => {
  if (!props.data) {
    return <h2>One moment please...</h2>; //maybe add a spinner here
  }
  return ( <div className="player-list">{props.data.slice(0, props.limit).map((player, key) => {
    return <PlayerCard data={player} key={key} />;
})} </div>
  );
};

export default CardList;
