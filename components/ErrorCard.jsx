import React from 'react';
import RegularButton from './RegularButton';
import { useEffect, useRef } from 'react';

export default function ErrorCard({ error }) {

    const divRef = useRef(null)

    useEffect(() => {
        divRef.current.focus()
    }, [])

    return (
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
            <p className="p--large">Sorry, there was an error.</p>
            <p className="p--regular">
                Please come back later or click the button below to try restarting the game.
            </p>
            <RegularButton handleClick={() => window.location.reload()}>
                Restart game
            </RegularButton>
        </div>
    )
}