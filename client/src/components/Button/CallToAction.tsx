import { CallToActionProps } from '@/components'
import { Link } from 'react-router-dom'

export const CallToAction = (props: CallToActionProps) => {
  return (
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  )
}
