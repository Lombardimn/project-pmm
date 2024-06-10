// BUTTON PROPS

export interface ButtonActionProps {
  children: React.ReactNode,
  className: string,
  type?: "submit" | "reset" | "button",
  onClick?: () => void
}

export interface CallToActionProps {
  children: React.ReactNode,
  className: string,
  href: string,
  title?: string
}

// OTHER PROPS