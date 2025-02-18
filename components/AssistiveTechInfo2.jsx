import React from 'react';

export default function AssistiveTechInfo2({nbOfTurns, playersTurn, nbOfPlayers}) {

    const ElStyle = 
        playersTurn === 1 ? "card-info--text-player-1" :
        playersTurn === 2 ? "card-info--text-player-2" :
        playersTurn === 3 ? "card-info--text-player-3" :
        "card-info--text-player-4";

    return (
        <section className = "card-info card-info--text">
            <p>Number of turns: {nbOfTurns}</p>
            {nbOfPlayers && nbOfPlayers > 1 && 
                <div>
                    <p>Number of players: {nbOfPlayers}</p>
                    <p className={ElStyle}>Player {playersTurn}'s turn</p>
                </div>
            }
        </section>
    )
}