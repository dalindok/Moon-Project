import head from '../../assets/imgs/head.png'
import logo from '../../assets/imgs/logo.png'
const Hero = () => {
  return (
    <div className=' justify-between flex sm:p-12 p-5 bg-red-50'>
        <img className='w-1/4 sm:ml-28 lg:ml-5 ml-8' src={head} alt="Hero Img" />
        <div className='font-zain flex items-center flex-col sm:pt-10 lg:pr-36 pr-12 pt-5'>
        {/* <p className='text-9xl font-bold pb-2 text-customPink'>Moon</p> */}
        <img className="lg:w-[300px] lg:h-[150px] sm:w-[150px] sm:h-[80px] object-cover w-[100px] h-[50px]" src={logo} alt="moon" />
        <p className='sm:text-2xl text-sm'>"Your trusted space to learn, connect, and transform </p>
        <p className='sm:text-2xl text-sm'>your skincare routine, one step at a time."</p>
        </div>
    </div>
  )
}

export default Hero