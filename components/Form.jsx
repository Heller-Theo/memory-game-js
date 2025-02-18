import React from 'react';
import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange }) {
    return (
        <div className="form-container">
            <p>Customize the game by selecting an emoji category and a number of pairs of cards</p>
            <form className="wrapper">
                <Select handleChange={handleChange}>
                </Select>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}