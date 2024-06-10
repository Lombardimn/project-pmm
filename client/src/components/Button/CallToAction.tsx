import { CallToActionProps } from "@/components"

export const CallToAction = (props: CallToActionProps) => {
  return (
    <a  href={props.href} className={props.className}>
      {props.children}
    </a>
  )
}