import React from 'react'
import "../assets/styles/index.css"
import "../assets/styles/card.css"

function Card({key, title , description , image}) {
  return (
    <>
    <div className="card">
        <div className="card__content container">
            <div className="card__body" key={key}>
                <div className="card__img">
                    <img src={image} alt={title} />
                </div>
                <div className="card__title">
                    <h3>{title}</h3>
                </div>
                <div className="card__description">
                    <p>{description}</p>
                </div>
                <div className="card__btn">
                    <button>Buy Product</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card