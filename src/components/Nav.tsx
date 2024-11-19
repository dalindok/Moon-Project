import logo from '../assets/imgs/logo.png'
const Nav = () => {
  return (
    <div className='px-5 justify-between flex sm:px-20 lg:px-10 shadow-lg sticky h-[80px]'>
      <img className="w-[70px] object-cover sm:w-[120px] " src={logo} alt="Logo" />
      <div className='font-zain flex font-bold px-0 text-[20px] sm:px-10 lg:text-[25px]' >
        <button className='px-5'>Home</button>
        <button className='px-5'>Q&As</button>
        <button className='px-5'>About</button>
        <button className='px-5'>Account</button>
      </div>
    </div>
  )
}

export default Nav