import React from 'react'
import { Link } from 'react-router-dom'; 

const Stack = ({ id, name, source }) => {
	return (
        <Link to={`/${id}`} className="item">
            <img src={source} alt={name}/>
            <div className="overlay">
                <h3>{name}</h3>
            </div>
        </Link>
        )
}

export default Stack;