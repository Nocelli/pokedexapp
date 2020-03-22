import React from 'react'
import './Card.css'


const Card = ({ abilities, moves, name, game_indices, sprites, stats, types }) => {
    return (
        <div className="card">
            <span className='pokeName' >{name}</span>
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
                <div>
                    <span className='listTitle' >Type</span>
                    <ol className='typeList'>
                        {Object.entries(types).map((type, key) => (
                            <li key={key}>{type[1].type.name}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Card;