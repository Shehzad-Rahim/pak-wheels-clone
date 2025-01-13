import Link from "next/link"
import Image from "next/image"
import pwLogo from '../../public/images/pw-logo.png'
import { ImMobile } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
function Header() {
  return (
    <header className="md:mx-20 sm:mx-10 bg-transparent">
        <div className="sm:block hidden">
        <div className="flex justify-between py-2">
            <h1 className="flex gap-1"><ImMobile className="text-xl text-[#b73439]" /> Download App via SMS</h1>
            <div className="flex gap-2">
                <p className="text-[#b73439] font-serif font-bold">اردو</p>
                <Link className="px-2 border-l py-0" href={''}>Sign Up</Link>
                <Link className="px-2 border-l" href={''}>Sign In</Link>
            </div>
        </div>
        <hr />
      <nav className="flex flex-wrap items-center justify-between">
        <Link href={'/'} className="w-[160px] h-[60px] my-3">
            <Image src={pwLogo} alt="brand logo"></Image>
        </Link>
        <ul className="flex flex-wrap font-semibold">
            <li className="mb-5">
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>Used Cars</Link>
            </li>
            <li>
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>New Cars</Link>
            </li>
            <li>
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>Bikes</Link>
            </li>
            <li>
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>Auto Store</Link>
            </li>
            <li>
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>Videos</Link>
            </li>
            <li>
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>Forums</Link>
            </li>
            <li>
                <Link className="p-4 hover:bg-white transition-all hover:text-[#b73439]" href={''}>Blog</Link>
            </li>
            <li>
                <Link className="p-4 mr-3 hover:bg-white transition-all hover:text-[#b73439]" href={''}>More</Link>
            </li>
            <li>
                <Link className="bg-[#b73439] hover:bg-[#8e2225] py-3 px-6 rounded-md" href={''}>Post an Ad</Link>
            </li>
        </ul>
      </nav>
      </div>

      {/* Small Screen Navbar  */}
      <div className="sm:hidden flex justify-between items-center py-3 px-6">
      
      <Link href={'/'} className="w-[100px] h-[60px] z-[100]">
            <Image src={pwLogo} alt="brand logo"></Image>
        </Link>
    <Sheet>
  <SheetTrigger className="sm:hidden block -mt-7"><IoMenu className="text-3xl" /></SheetTrigger>
  <SheetContent className="bg-gradient-to-t to-[#000812] from-[#013777] text-white">
  <div className="flex justify-between py-2 mt-5 text-[12px]">
            <h1 className="flex gap-1"><ImMobile className="text-lg text-[#b73439]" /> Download App via SMS</h1>
            <div className="flex gap-2">
                <p className="text-[#b73439] font-serif font-bold">اردو</p>
                <Link className="px-2 border-l py-0" href={''}>Sign Up</Link>
                <Link className="px-2 border-l" href={''}>Sign In</Link>
            </div>
        </div>
        <hr />
        <ul className="font-semibold">
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link href={''}>Used Cars</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link href={''}>New Cars</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link href={''}>Bikes</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link  href={''}>Auto Store</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link  href={''}>Videos</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link  href={''}>Forums</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link href={''}>Blog</Link>
            </li>
            <li className="py-3 border-b  hover:bg-white transition-all hover:text-[#b73439] pl-2">
                <Link  href={''}>More</Link>
            </li>
            <li className="mt-5">
                <Link className="bg-[#b73439] hover:bg-[#8e2225] py-3 px-6 rounded-md" href={''}>Post an Ad</Link>
            </li>
        </ul>
  </SheetContent>
</Sheet>
</div>
    </header>
  )
}

export default Header
