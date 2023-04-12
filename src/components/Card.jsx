import React from 'react'
import "../assets/styles/index.css"
import "../assets/styles/card.css"

function Card({cardKey, title , description , image , price, readMore}) {

  return (
    <>
    <div className="card">
        <div className="card__main container">
            <div className="card__body" key={cardKey}>
                <div className="card__img">
                    <img src={image} alt={title} />
                </div>
                <div className="card__title">
                    <h3>{title}</h3>
                </div>
                <div className="card__description">
                    <p>{description}</p>
                </div>
                <div className="card__lower">
                    <div className="card__btn">
                    <button onClick={readMore}>Read More</button>
                    </div>
                    <div className="card__price">
                        <span>$ {price}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card