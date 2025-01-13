import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

function Hero() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center  w-full h-96">
      <div className="leading-10">
      <h1 className="sm:text-[38px] text-[28px] sm:text-start text-center">Find Used Cars in Pakistan</h1>
      <p className="sm:text-lg text-sm">With thousands of cars, we have just the right one for you</p>
      </div>
      <div className="flex">
        <input className="sm:py-3 py-2 md:px-4 px-2 lg:w-[300px] md:w-[250px] sm:w-[200px] w-[140px] rounded-l-sm outline-none text-black sm:text-lg text-sm" type="text" placeholder="Car Make or Model"/>
        <input className="sm:py-3 py-2 md:px-4 px-2 md:w-[200px] sm:w-[150px] w-[80px] border-l outline-none text-black sm:text-lg text-sm" type="text" placeholder="All Cities"/>
        <input className="sm:py-3 py-2 md:px-4 px-2 md:w-[200px] sm:w-[150px] w-[95px] border-l outline-none text-black sm:text-lg text-sm" type="text" placeholder="Price Range"/>
        <div className="sm:w-[60px] w-[30px] sm:h-[55px] rounded-r-sm bg-green-500 flex justify-center items-center sm:text-2xl text-lg font-bold cursor-pointer">
        <FaSearch />
        </div>
        
      </div>
        <Link className="flex gap-1 items-center text-sm border py-1 sm:px-8 px-4" href={''}>Advance Filter <FaAngleRight className="text-[12px]" /></Link>
    </div>
  )
}

export default Hero