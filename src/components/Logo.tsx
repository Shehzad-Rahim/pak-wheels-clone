import Image from "next/image";
// import Image1 from "@/public/logo/logo13.png";
// import Image2 from "@/public/logo/logo1.png";
// import Image3 from "@/public/logo/kia.png";
// import Image4 from "@/public/logo/Tyota.png";
// import Image5 from "@/public/logo/logo10.png";
// import Image6 from "@/public/logo/logo11.png";
// import Image7 from "@/public/logo/logo12.png";
// import Image8 from "@/public/logo/logo14.png";
// import Image9 from "@/public/logo/logo15.png";
// import Image10 from "@/public/logo/logo16.png";
// import Image11 from "@/public/logo/logo18.png";
// import Image12 from "@/public/logo/logo19.png";
// import Image13 from "@/public/logo/logo20.png";
// import Image14 from "@/public/logo/logo21.png";

const data = [
    {
        img: "/logo/logo13.png",
        title:"Porshe"
      },{
        img: "/logo/logo1.png",
        title:"Suzuki"
      },{
        img: "/logo/kia.png",
        title:"KIA"
      },{
        img: "/logo/Tyota.png",
        title:"Toyota"
      },{
        img: "/logo/logo10.png",
        title:"Audi"
      },

      {
        img: "/logo/logo11.png",
        title:"Proton"
      },{
        img: "/logo/logo12.png",
        title:"United"
      },{
        img: "/logo/logo14.png",
        title:"Mercetez benz"
      },{
        img: "/logo/logo15.png",
        title:"Princess"
      },{
        img: "/logo/logo16.png",
        title:"DFSK"
      },
      {
        img: "/logo/logo18.png",
        title:"ISUZU"
      },{
        img: "/logo/logo19.png",
        title:"FAW"
      },{
        img: "/logo/logo20.png",
        title:"HYUNDAI"
      },
      {
        img: "/logo/logo21.png",
        title:"Honda"
      }
];

function Logo() {
  return (
    <div className="bg-[#F2F3F3] py-16 md:px-36 px-6 ">
      <h1 className="text-2xl ml-20 font-[600] py-5">New Cars by Make</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-9 md:gap-x-5  gap-y-20  w-full">
       {
        data.map((item,i)=>{
            return(
               <div key={i} className=" flex justify-center items-center flex-col  ">
                <div className="bg-white p-[4px] rounded-full  w-[100px] h-[100px]  cursor-pointer ">
                 <Image className="" src={item.img} alt={item.title} width={5000} height={5000} />
                </div>
                 <h3 className="hover:text-blue-600 text-xl ">{item.title}</h3>
               </div>
               
            )
        })
       }
      </div>
    </div>
  );
}

export default Logo;
