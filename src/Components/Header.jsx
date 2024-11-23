
const Header = () => {



  return (
    <div className=' w-full py-[2%] md:px-[15%] flex flex-col md:flex-row md:justify-between justify-center items-center'>
      <p className='text-4xl font-bold text-[#22428F] flex'>EagleCounty
        <p className="text-[#3553e8]">Bank</p></p>

      <p className='md:text-xl text-[#204296] capitalize flex gap-2 font-semibold'>
        need help?
        <a href='http://' className='underline'>contact us</a>
        or
        <a href='http://' className='underline'>Live Chat</a>
      </p>
    </div>
  )
}

export default Header