export const Copyright = () => {
  return (
    <section className="w-full px-2 pt-12 justify-between items-center flex flex-col gap-2">
      <h3 className="text-gray-500">
        Powered by <a href="https://lombardidev.ar/" className="text-blue-500 font-semibold">@lombardidev</a>
      </h3>
      <p className="text-gray-500" >
        Copyright <span className="font-semibold text-blue-500">&copy; {new Date().getFullYear()}</span> - All Rights Reserved
      </p>
    </section>
  )
}