export interface ButtonActionProps {
  children: React.ReactNode
  className: string
  type?: "submit" | "reset" | "button"
  onClick?: () => void
  onChange?: () => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
  ref?: React.Ref<HTMLButtonElement>
}

export interface CallToActionProps {
  children: React.ReactNode
  className: string
  href: string
  title?: string
}