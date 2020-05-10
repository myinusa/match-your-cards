import React from 'react'
import './Card.css'
import backofCard from './assets/boc1.jpg'

const Card = ({ card, onCardOpen }) => {

  const clickHandler = () => {
    if (!card.open && !card.matched) {
      onCardOpen(card)
    }
  }

  const getCard = () => {
    if (card.matched) {
      return
    } else if (card.open) {
      return <img src={card.image} />
    }

    return <div className="not-opened">
      <img src={backofCard} />
    </div>
  }

  return (
    <div className={"card" + (card.matched ? " matched" : "")} onClick={clickHandler}>
      {getCard()}
    </div>
  )
}

export default Card
