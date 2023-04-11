import React from 'react'
import "../assets/styles/index.css"
import "../assets/styles/card.css"
function Card() {
  return (
    <>
    <div className="card">
        <div className="card__content container">
            <div className="card__body">
                <div className="card__img">
                    <img src="" alt="" />
                </div>
                <div className="card__title">
                    <h3>Salam</h3>
                </div>
                <div className="card__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, natus necessitatibus! Ducimus tempora enim nemo necessitatibus, aut totam reiciendis in numquam libero sequi facere similique.</p>
                </div>
                <div className="card__btn">
                    <button>Salam</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card