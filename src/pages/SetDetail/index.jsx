import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'

import { Layout } from '../../components/Layout'
import { SetBanner } from '../../components/SetBanner'
import { CardList } from '../../components/CardList'
import { BigCard } from '../../components/BigCard'
import { Loader } from '../../components/Loader'

import { Grid, BannerContainer, CardListContainer, BigCardContainer } from './style'

export const SetDetail = ({ setCode }) => {
  const { cards, cardsLoading, fetchCards, currentSet, isSetLoading, fetchSet } = useContext(Context)

  useEffect(() => {
    fetchSet(setCode)
    fetchCards(setCode, 'setCode')
  }, [])

  return (
    <Layout title={currentSet.name || 'Set'}>
      <Grid>
        <BannerContainer>
          {
            isSetLoading ? <Loader /> : <SetBanner {...currentSet} />
          }
        </BannerContainer>
        <CardListContainer>
          {
            cardsLoading ? <Loader /> : <CardList cards={cards} />
          }
        </CardListContainer>
        <BigCardContainer>
          <BigCard />
        </BigCardContainer>
      </Grid>
    </Layout>
  )
}
