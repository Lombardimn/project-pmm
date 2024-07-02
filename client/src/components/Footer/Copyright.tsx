export const Copyright = () => {
  return (
    <section className='w-full px-2 pt-16 justify-between items-center flex flex-col gap-2 text-lg'>
      <h3 className='text-primary-color'>
        Powered by <a href='https://lombardidev.ar/' className='text-blue-600 font-semibold inline-block'>@lombardidev</a>
      </h3>
      <p className='text-primary-color' >
        Copyright <span className='font-semibold text-blue-600 inline-block'>&copy; {new Date().getFullYear()}</span> - All Rights Reserved
      </p>
    </section>
  )
}
