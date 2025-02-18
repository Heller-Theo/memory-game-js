import React from 'react';
import { data } from '../data/data';
import Option from './Option';

export default function Select({ handleChange }) {
    const selectEl = Object.entries(data).map(([key, value]) => (
        <div key={key} className="form__inner-wrapper">
            <label htmlFor={key}>
                {
                    key === "player" ? `Select a ${key} number` : 
                    key === "number" ? `Select a ${key} of pairs` :
                    `Select a ${key}`
                }
            </label>
            <select 
                name={key} 
                id={key} 
                onChange={handleChange}
            >
                <Option valueArray={value} />
            </select>
        </div>
    ))

    return (
        <>
            {selectEl}
        </>
    )
}