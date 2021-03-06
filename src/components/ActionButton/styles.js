import styled from 'styled-components'
import { phone } from '../../styles/MediaQueries'

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F6F6F6;
  border-radius: var(--border);
  border: none;
  transition: cubic-bezier(0.215, 0.610, 0.355, 1) .2s;

  &:hover {
    background: var(--accent);
    color: var(--text-white);
  }
`

export const Label = styled.div`
  ${phone} {
    font-size: 12px;
  }
`

export const Item = styled.div`
  ${phone} {
    font-size: 12px;
  }
`
