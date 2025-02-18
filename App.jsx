import React, { useEffect, useState } from 'react'
import Form from '/components/Form'
import MemoryCard from '/components/MemoryCard'
import AssistiveTechInfo from './components/AssistiveTechInfo'
import AssistiveTechInfo2 from './components/AssistiveTechInfo2'
import GameOver from './components/GameOver'
import ErrorCard from './components/ErrorCard'

export default function App() {
    
    const initialState = {category: 'animals-and-nature', number: 5, player: 1}
    const [formData, setFormData] = useState(initialState)
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    const [isError, setIsError] = useState(false)
    const [nbOfTurns, setNbOfTurns] = useState(0)
    const [playersTurn, setPlayersTurn] = useState(1)
    const [nbPairsPerPlayer, setNbPairsPerPlayer] = useState([0,0,0,0])



    useEffect(() => {
        if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
            
            setNbPairsPerPlayer(prevNbPairsPerPlayer => {
                const newNbPairsPerPlayer = [...prevNbPairsPerPlayer]
                newNbPairsPerPlayer[selectedCards[0].player - 1]++;
                return newNbPairsPerPlayer
            })
        }
    }, [selectedCards])

    useEffect(() => {
        if (matchedCards.length && matchedCards.length === emojisData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])

    function handleFormChange(e) {
        setFormData(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}))
    }



    async function startGame(e) {
        e.preventDefault()

        try {
            const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)

            if (!response.ok) {
                throw new Error('Could not fetch data from the API')
            }

            const data = await response.json()
            const dataSlice = getDataSlice(data)
            const emojisArray = getEmojisArray(dataSlice)

            setEmojisData(emojisArray)
            setIsGameOn(true)
        } catch (error) {
            console.error(error)
            setIsError(true)
        }

        function getDataSlice(data) {
            const randomIndices = getRandomIndices(data)
            const dataSlice = randomIndices.map(index => data[index])

            return dataSlice
        }

        function getRandomIndices(data) {
            const randomIndicesArray = []

            for (let i = 0; i < formData.number; i++) {
                const randomIndex = Math.floor(Math.random() * data.length)
                if (!randomIndicesArray.includes(randomIndex)) {
                    randomIndicesArray.push(randomIndex)
                } else {
                    i--
                }
            }

            return randomIndicesArray
        }

        function getEmojisArray(data) {
            const pairedEmojisArray = [...data, ...data]

            for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp = pairedEmojisArray[i]
                pairedEmojisArray[i] = pairedEmojisArray[j]
                pairedEmojisArray[j] = temp
            }

            return pairedEmojisArray
        }
    }

    function turnCard(name, index) {
        if (selectedCards.length === 0 || selectedCards.length === 2) {
            setNbOfTurns(prevNbOfTurns => prevNbOfTurns + 1)
        }
        if (selectedCards.length === 1) {
            setPlayersTurn(nbOfTurns % formData.player + 1)
        }
        if (selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, {name, index, player: playersTurn}])
        } else if (selectedCards.length === 2) {
            setSelectedCards([{name, index, player: playersTurn}])
        }
    }

    function resetGame() {
        setIsGameOn(false)
        setSelectedCards([])
        setMatchedCards([])
        setAreAllCardsMatched(false)
        setNbOfTurns(0)
        setFormData(initialState)
    }

    function resetError() {
        setIsError(false)
    }
    


    return (
        <main>
            <h1>Memory</h1>
            {!isGameOn && !isError &&
                <Form 
                    handleSubmit = {startGame}
                    handleChange = {handleFormChange}
                />
            }
            {areAllCardsMatched &&
                <GameOver
                    handleClick = {resetGame}
                    nbOfTurns = {nbOfTurns}
                    nbOfPlayers = {formData.player}
                    nbPairsPerPlayer = {nbPairsPerPlayer}
                />
            }
            {isGameOn && !areAllCardsMatched &&
                <AssistiveTechInfo 
                    emojisData = {emojisData} 
                    matchedCards = {matchedCards} 
                />
            }
            {isGameOn && !areAllCardsMatched &&
                <AssistiveTechInfo2
                    nbOfTurns = {nbOfTurns}
                    playersTurn = {playersTurn}
                    nbOfPlayers={formData.player}
                />
            }
            {isGameOn && 
                <MemoryCard 
                    handleClick = {turnCard}
                    data = {emojisData} 
                    selectedCards = {selectedCards}
                    matchedCards = {matchedCards}
                    nbOfPlayers={formData.player}
                />
            }
            {isError &&
                <ErrorCard 
                    handleClick = {resetError}
                />
            }
        </main>
    )
}