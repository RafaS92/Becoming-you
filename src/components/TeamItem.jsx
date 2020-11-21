import React from 'react'
import "./Team.css"

function TeamItem({title,name,email,pic}) {
    return (
        <div className="card-container">
            <img alt="" src={pic}className="card-icon" />
            <h2>{title}</h2>
            <h3>{name}</h3>
            <a href={email}>
              <i className="fas iconn fa-envelope-square bot-icons fa-6x"  />
            </a>
        </div>
    )
}

export default TeamItem
