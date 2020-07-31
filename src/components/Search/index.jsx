import React, { useContext } from 'react'
import { Context } from '../../Context'

import { InputSearch } from '../InputSearch'
import { LinkStyled } from '../LinkStyled'

import { Container, H2, Arranger } from './styles'

export const Search = () => {
  const { searchString, setSearchString, fetchCards } = useContext(Context)

  const handleOnClick = async () => fetchCards()

  const handleOnChange = ({ target }) => setSearchString(target.value)

  const handleOnKeyPress = ({ charCode }) => charCode === 13 && fetchCards()

  return (
    <Container>
      <H2>Find your favorite Pokémon TCG Card!</H2>
      <Arranger>
        <InputSearch
          value={searchString}
          onClick={handleOnClick}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
          placeholder='Name of card'
        />
        <LinkStyled to='/sets'>Explore sets</LinkStyled>
      </Arranger>
    </Container>
  )
}
