import React from 'react';


const PlayerCard = (props) => {

    const player = props.data;
    return(
        <div>
            <div className="player-card" >
                <h2 className="title">{player.name}</h2>
                <p className="country">Country: {player.country}</p>
                <p className="searches">Number of Searches: {player.searches}</p>
                <p className="rank">Rank: {player.id + 1} </p>
                
            </div>
        </div>
    )
}

export default PlayerCard