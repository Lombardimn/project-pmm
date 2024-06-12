import { MdiLoading } from "../Icons"

export const Loading = () => {
  return (
    <div className="w-full h-full absolute top-0 flex justify-center items-center z-50 bg-opacity-50 backdrop-blur-sm bg-gray-100">
      <MdiLoading className="w-20 h-20 animate-spin text-blue-500"/>
    </div>
  )
}