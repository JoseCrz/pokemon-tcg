import React, { useState, useContext } from 'react'
import { Context } from '../../Context'

import { FavButton } from '../FavButton'

import { useNearScreen } from '../../hooks/useNearScreen'

import { Container, Img, Figure } from './styles'

export const Card = ({ card }) => {
  const [loading, setLoading] = useState(true)
  const { currentCard, setCurrentCard, setBigPictureLoaded, addFav, deleteFav, isFav, activateModal } = useContext(Context)

  const [show, element] = useNearScreen()

  const handleOnClick = () => {
    if (currentCard === null) {
      setBigPictureLoaded(false)
      setCurrentCard(card)
    } else {
      if (currentCard.id !== card.id) {
        setBigPictureLoaded(false)
        setCurrentCard(card)
      }
    }

    activateModal()
  }

  const handleFav = () => isFav ? deleteFav({ card }) : addFav({ card })

  return (
    <Container ref={element}>
      {
        show &&
          <>
            <FavButton onClick={handleFav} isFav={isFav} cardId={card.id} />
            <Figure onClick={handleOnClick}>
              <Img loading={loading} src={card.imageUrl} onLoad={() => setLoading(false)} alt='' />
            </Figure>
          </>
      }
    </Container>
  )
}
