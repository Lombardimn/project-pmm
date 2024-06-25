import { ButtonActionProps } from '@/components'

export const ButtonToAction = (Props: ButtonActionProps) => {
  return (
    <button
      className={Props.className}
      type={Props.type}
      onClick={Props.onClick}
    >
      {Props.children}
    </button>
  )
}
