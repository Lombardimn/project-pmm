import { CardSelectorProps } from '@/components'
import { Link } from 'react-router-dom'

export const CardSelector = (props: CardSelectorProps) => {
  return (
    <Link replace={props.replace} to={props.to} className={props.className}>
      <div className='flex items-center gap-4 mx-3 py-2'>
        {props.children}
        <h3 className='text-lg uppercase'>{props.title}</h3>
      </div>
    </Link>
  )
}
