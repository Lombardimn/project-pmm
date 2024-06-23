import React, { JSX } from 'react'

export interface ButtonActionProps {
  children: JSX.Element[] | JSX.Element | string
  className: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  onChange?: () => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  ref?: React.Ref<HTMLButtonElement>
}

export interface CallToActionProps {
  children: JSX.Element[] | JSX.Element | string
  className?: string
  to: string
  title?: string
}
