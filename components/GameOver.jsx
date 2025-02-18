import React from 'react';
import { useRef, useEffect } from 'react';
import RegularButton from './RegularButton';

export default function GameOver({ handleClick, nbOfTurns, nbOfPlayers, nbPairsPerPlayer }) {

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.focus();
    }, [])

    return (
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
            <p className="p--large">You've matched all the pairs in {nbOfTurns} turns!</p>
            {nbOfPlayers > 1 && (
                <p className="p--regular">
                    {Array.from({ length: nbOfPlayers }, (_, i) => (
                        <span 
                            className={`card-info--text-player-${nbOfPlayers > 1 ? `${i+1}` : ''}`}
                            key={i}
                        >
                            Player {i + 1}: {nbPairsPerPlayer[i]} pairs    
                        </span>
                    ))}
                </p>
            )}
            <p className={"p--regular"}>Click the button below to play again.</p>
            <RegularButton handleClick={handleClick}>
                Play again
            </RegularButton>
        </div>
    )
}