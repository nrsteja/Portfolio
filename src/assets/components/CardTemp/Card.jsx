import React from 'react'
import "./Card.css"

function ListOfConcepts({concepts}){
    const concept = concepts.map((element) => {
        return (
            <ul type="disc" className='item'>
                <li>{element}</li>
            </ul>
        )
    })
    return <div className='container'>{concept}</div>
}

function Card(props) {
    
    return (
        <div className='card'>
            <img src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h3>{props.domain}</h3>
            <div className='project'>
                <span className='card-title'>Project:</span> <span>{props.core}</span>
            </div>
            <ListOfConcepts concepts={props.concepts}/>
        </div>
    );
}

export default Card;