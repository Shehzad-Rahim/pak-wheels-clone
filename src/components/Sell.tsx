import Link from "next/link"

function Sell() {
  return (
    <div className="flex flex-col relative items-center my-16 sm:px-0 px-5">
        <h1 id="sell" className="lg:text-[27px] md:text-[22px] text-[20px] bg-white relative lg:top-5 top-4 font-semibold sm:text-start text-center sm:mx-0" >Sell Your Car on PakWheels and Get the Best Price</h1>
    <div className='flex md:flex-row flex-col items-center lg:gap-32 md:gap-[70px] gap-16 pb-10 pt-14 lg:px-8 md:px-4 sm:px-8 border lg:w-[1000px] md:w-[750px] sm:w-[600px] w-full border-gray-400'>
       <div className=" flex flex-col md:items-start items-center gap-5">
        <h2 className='lg:text-[22px] text-[20px] font-semibold'>Post your Ad on Pak Wheels</h2>
        <div className=" flex flex-col md:items-start items-center gap-1 text-gray-600 text-[15px] ">
            <p>Post ad for Free in 3 Easy Steps</p>
            <p>Get Geniune offers from Verified Buyers</p>
            <p>Sell you car Fast at the Best Price</p>
        </div>
        <Link className="w-[180px] h-[45px] flex justify-center items-center text-lg text-white rounded-sm bg-[#cf3035] hover:bg-[#8f292d]" href={''}>Post Your Ad</Link>
       </div>
       <div className="relative md:h-[190px] md:w-[1px] h-[1px] w-[90%] bg-gray-400">
        <p className="absolute md:-left-4 md:top-[42%] left-[45%] md:px-0 px-1 -top-[14px] sm:text-2xl text-xl text-gray-600 font-bold w-10 bg-white">OR</p>
       </div>
       <div className=" flex flex-col gap-5 md:items-start items-center">
        <h2 className='lg:text-[22px] text-[20px] font-semibold'>Try PakWheels Sell it For Me</h2>
        <div className=" flex flex-col gap-1 md:items-start items-center text-gray-600 text-[15px]">
            <p>Dedicated Sales Expert toSell your Car</p>
            <p>We Bargain for you and share the Best Offer</p>
            <p>We ensure Safe & Secyre Transaction</p>
        </div>
        <Link className="w-[180px] h-[45px] flex justify-center items-center text-lg text-white rounded-sm bg-[#3487da] hover:bg-[#3674b3]" href={''}>Register You Car</Link>
       </div>
    </div>
    </div>
  )
}

export default Sell