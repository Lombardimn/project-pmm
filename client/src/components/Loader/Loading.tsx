import { MdiLoading } from "../Icons"

export const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <MdiLoading className="w-20 h-20 animate-spin text-blue-500"/>
    </div>
  )
}