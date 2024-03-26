import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { Boxes } from "./ui/background-boxes";

function HeroSection() {
  return (
    <div
      className="min-h-screen  md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
     
      <div className="p-4 mt-35 relative z-10 w-full text-center" >
      <Boxes />
        <h1
          className="mt-40 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Aryan Patel</h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          Hey there! I&apos;m Aryan Patel, a passionate and driven computer science student.
           My journey into the world of coding began with curiosity and has now evolved into a true love for turning complex problems 
           into elegant solutions. Whether it&apos;s diving into algorithms or collaborating on exciting projects, I thrive on the challenges 
           that the field offers. 
        </p>
        <div className="mt-10">
          <Link href={"/Aryan-Patel.pdf"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Download CV
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection