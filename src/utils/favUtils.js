export const addFav = ({ card }) => {
  // TODO: Duplicate Handling
  const favs = JSON.parse(window.localStorage.getItem('favs')) || []

  const ids = favs.map(fav => fav.id)

  if (!ids.includes(card.id)) {
    favs.push(card)
    window.localStorage.setItem('favs', JSON.stringify(favs))
  }
}

export const getFavs = () => JSON.parse(window.localStorage.getItem('favs')) || []

export const deleteFav = ({ card }) => {
  const favs = JSON.parse(window.localStorage.getItem('favs')) || []
  const newFavs = favs.filter(fav => fav.id !== card.id)
  window.localStorage.setItem('favs', JSON.stringify(newFavs))
}
