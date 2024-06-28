import { JSX } from 'react'

export interface CardSelectorProps {
  children: JSX.Element[] | JSX.Element | string
  className: string
  to: string
  title?: string
  replace?: boolean
}
