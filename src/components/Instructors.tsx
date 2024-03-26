'use client'
import { WavyBackground } from "./ui/wavy-background"
//import { AnimatedTooltip } from "./ui/animated-tooltip";
import { PinContainer } from "./ui/3d-pin";
import Image from 'next/image';

const pinsData = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/aryan-patel-686313233",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D" // Change this to the actual image URL
  },
  {
    title: "Github",
    href: "https://github.com/aryan2702p",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    imageUrl: "https://i.pinimg.com/564x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" // Change this to the actual image URL
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/i_dont_know__/",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    imageUrl: "https://i.pinimg.com/564x/96/f7/ce/96f7ce8096b394f6cdace50a80aa7a35.jpg" // Change this to the actual image URL
  },
  {
    title: "Coding NInja",
    href: "https://www.codingninjas.com/studio/profile/aryn_2702",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    imageUrl: "https://i.pinimg.com/564x/60/63/0a/60630a7c112f89afe517a4f239d6d07f.jpg" // Change this to the actual image URL
  },
  // Add more objects as needed
];

function Instructors() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-4">Know my Work</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Checkout and Visit my profiles on these platforms</p>
           
            <div className=" grid grid-cols-1 h-[10rem] sm:h-[20rem] sm:mt-4 sm:w-full sm:flex sm:items-center justify-center bg-transparent  ">
            {pinsData.map((pin, index) => (
    

        // ...
               
                <PinContainer key={index} title={pin.href} href={pin.href}>
                   <a href={pin.href}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] overflow-hidden">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {pin.title}
                    </h3>
                    {/* Uncomment below if you want to show description */}
                    {/* <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500">
                        {pin.description}
                      </span>
                    </div> */}
                    <Image width={100} height={100} src={pin.imageUrl} alt={pin.title} className="w-full h-56 rounded-lg mt-4 " />
                  </div>
                  </a>
                </PinContainer>
      ))}
    </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors