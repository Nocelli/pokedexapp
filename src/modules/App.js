import React, { useState, useEffect } from 'react'
import './App.css'
import './Card.js'
import Card from './Card.js'



const App = () => {

    const [search, setSearch] = useState('')
    const [query, setQuery] = useState(Math.floor(Math.random() * 803) + 1)
    const [pokemon, setPokemon] = useState({})
    const [errors, setErrors] = useState([])

    const exampleReq = `https://pokeapi.co/api/v2/pokemon/${query}/`

    useEffect(() => {
        getRequest()
    }, [query])

    const getRequest = async () => {
        try {
            const response = await fetch(exampleReq)
            setErrors([])
            if (response.status === 200) {
                const data = await response.json()
                setPokemon(data)
                return;
            }
            else if (response.status === 404) {
                //alert(`Não encontrado: ${query}`)
                setErrors(errors.concat(`Pokémon não encontrado: "${query}" `))
                return;
            }
        }
        catch (err) {
            setErrors(errors.concat(`Um erro ocorreu: ${err} `))
        }
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search.toLowerCase())
        setSearch('')
    }

    const showErrors = () =>{
        if(errors.length > 0){
            return(
                <div className='error-message' onClick={() => setErrors([])}>
                {
                    errors.map(erro =>
                        <h1>{erro}</h1>
                )}
                </div>
            )
        }
    }

    return (
        <div className='App'>
            {showErrors()}
            <form className="search-form" onSubmit={getSearch}>
                <input className='search-bar' type="text" placeholder='Digite o nome de um Pokémon' value={search} onChange={updateSearch} />
                <button className='search-button' type="submit">Pesquisar</button>
            </form>
            <div className="card-holder">
                {
                    pokemon.types == null ? console.log("Nothing yet") : (
                        <Card
                            abilities={pokemon.abilities}
                            moves={pokemon.moves}
                            name={pokemon.name}
                            game_indices={pokemon.game_indices}
                            sprites={pokemon.sprites}
                            stats={pokemon.stats}
                            types={pokemon.types}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default App;