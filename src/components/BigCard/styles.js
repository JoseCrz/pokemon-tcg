import styled from 'styled-components'

export const Card = styled.div`
  overflow: hidden;
  border-radius: var(--border);
  background: var(--element);
  box-shadow: var(--shadow);
  padding-bottom: 141%;
  position: relative;
`

export const Top = styled.div`
  height: 100%;
  position: relative;
`

export const Figure = styled.figure`
  margin: 0;
  border: 0;
  padding: 2px;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 100%;
  padding-bottom: 141%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ThumbImg = styled(Img)`
  filter: blur(20px);
  transform: scale(1.1);
  /* transition: visibility 0ms ease 400ms; */
  visibility: ${props => props.isLoaded ? 'hidden' : 'visible'};
`

export const LoadedImage = styled(Img)`
  /* transition: opacity 400ms ease 0ms; */
  opacity: ${props => props.isLoaded ? 1 : 0};
`

export const H2 = styled.h2`
  text-align: center;
  margin: 0;
  padding-top: 20px;
`

export const Placeholder = styled.div`
  border: 2px solid gray;
  border-radius: var(--border);
  padding-bottom: 120%;
  display: grid;
`
