import { CardSelectorProps } from "@/components"

export const CardSelector = (props: CardSelectorProps) => {

  return (
    <a href={props.href} className={props.className}>
      <div className="flex items-center gap-4 mx-3 py-2">
        {props.children}
        <h3 className="text-lg uppercase">{props.title}</h3>
      </div>
    </a>
  )
}