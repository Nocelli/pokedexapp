import React from 'react'
import './Card.css'

const typeStyle = {
    'normal': '#A8A878',
    'fire': '#F08030',
    'fighting': '#C03028',
    'water': '#6890F0',
    'flying': '#A890F0',
    'grass': '#78C850',
    'poison': '#A040A0',
    'electric': '#F8D030',
    'ground': '#E0C068',
    'psychic': '#F85888',
    'rock': '#B8A038',
    'ice': '#98D8D8',
    'bug': '#A8B820',
    'dragon': '#7038F8',
    'ghost': '#705898',
    'dark': '#705848',
    'steel': '#B8B8D0',
    'fairy': '#EE99AC',
    '???': '#68A090',

}

const Card = ({ abilities, moves, name, game_indices, sprites, stats, types }) => {
    return (
        <div className="card">
            <span className='pokeName' >{name}</span>
            <div>
                <ol className='typeList'>
                    {Object.entries(types).map((type, key) => (
                        <li style={
                            { background: typeStyle[type[1].type.name] }}
                            key={key}>
                            {type[1].type.name}</li>
                    ))}
                </ol>
            </div>
            <ul className='spriteList'>
                {Object.entries(sprites).map((sprite, key) => (
                    sprite[1] === null ?
                        <></>
                        :
                        <li className='spriteListItem' key={key}>
                            <span className='spriteTitle'>{sprite[0].replace(/_/g, ' ')}</span>
                            <img className='sprite' src={sprite[1]} alt={sprite[0]}></img>
                        </li>
                ))}
            </ul>
            <div className="lists">
                <div>
                    <span className='listTitle' >Abilities</span>
                    <ol className='abilityList'>
                        {Object.entries(abilities).map((ability, key) => (
                            <li key={key}>
                                <span>{ability[1].ability.name}</span>
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <span className='listTitle' >Stats</span>
                    <ol className='statList'>
                        {Object.entries(stats).map((stat, key) => (
                            <li key={key}>
                                <span>{`${stat[1].stat.name.replace('special', 'spc')}: `}</span>
                                <span>{stat[1].base_stat}</span>
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <span className='listTitle' >Moves</span>
                    <ol className='moveList'>
                        {Object.entries(moves).map((move, key) => (
                            <li key={key}>
                                {move[1].move.name}
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <span className='listTitle' >Appearances</span>
                    <ol className='AppearanceList'>
                        {Object.entries(game_indices).map((Appearance, key) => (
                            <li key={key}>
                                {Appearance[1].version.name}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Card;