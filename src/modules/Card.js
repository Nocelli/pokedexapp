import React from 'react'
import './Card.css'


const Card = ({ abilities, moves, name, game_indices, sprites, stats, types }) => {


    return (
        <div className="card">
            <span>{name}</span>
            <span>Stats</span>
            <ol className='statList'>
                {Object.entries(stats).map((stat, key) => (
                    <li key={key}>
                        <span>{stat[1].stat.name}</span>
                        <span>{stat[1].base_stat}</span>
                    </li>
                ))}
            </ol>
            <ol className='moveList'>
                {Object.entries(moves).map((move, key) => (
                    <li key={key}>
                        {console.log(move)}
                    </li>
                ))}
            </ol>
            <span>Type</span>
            <ol className='typeList'>
                {Object.entries(types).map((type, key) => (
                    <li key={key}>{type[1].type.name}</li>
                ))}
            </ol>
            <ul className='spriteList'>
                {Object.entries(sprites).map((sprite, key) => (
                    sprite[1] === null ? 
                    <></>
                    : 
                    <li className='spriteListItem' key={key}>
                        <span className='spriteTitle'>{sprite[0].replace(/_/g,' ')}</span>
                        <img className='sprite' src={sprite[1]} alt={sprite[0]}></img>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Card;