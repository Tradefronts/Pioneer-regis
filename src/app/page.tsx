import Hero from "@/components/Hero";
import Image from "next/image";
import { homeContent } from "../config/images";
import { FaArrowRightLong } from "react-icons/fa6";
import Bottom from "@/components/Bottom";
import Separator from "@/components/Separator";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="">
      {/* HERO SECTION */}
      <div className="w-full px-4 sm:px-8 md:px-12 pb-10 ">
        <div className="pt-16 sm:pt-24 md:pt-32 ">
          {/* <div className="sm:text-2xl md:text-3xl space-y-3 font-dm-sans tracking-tight "> */}
          <div className="sm:text-2xl md:text-3xl text-xl font-medium space-y-3 font-dm-sans tracking-tight ">
            <h1>Softwares to power mission critical tasks.</h1>
            <h1>Used by over 1,000 professionals across India.</h1>
          </div>
          <div className="py-8 sm:py-12 md:py-10 text-[#9C9C9C] text-base">
            <p>
              How our software scales from 5 operations per second to 1M
              operations per second in a blink on demand.
            </p>
            <button className="flex items-center gap-2 mt-2">
              Read Report <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className=" w-full my-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[67%_33%] gap-5">
          {homeContent.heroImages.map((item, index) => (
            <div
              key={`hero-image-${index + 1}`}
              className={`
        bg-neutral-400 min-h-64 rounded-xl overflow-hidden
        ${index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
      `}
            >
              <Image
                src={item}
                alt=""
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Separator />

      {/* Our Story */}
      <div className="w-full flex flex-col lg:flex-row px-4 md:px-12 py-10">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 ">
          
          <SectionTitle title="Our Story" size="sm"/>
        </div>

        <div className="w-full lg:w-1/2 lg:px-6  space-y-4 tracking-tighter">
          <p className="text-2xl sm:text-3xl md:text-[40px] leading-snug">
            We build software for work that matters. For decisions that can't be
            undone.{" "}
            <span className="text-blue-500">
              For numbers that must be right. For systems people trust with
              everything.
            </span>
          </p>
          <p className="text-base text-[#9C9C9C]">
            Behind every report, every record, every asset — there's a
            responsibility. Pioneer Regis designs for that weight.
          </p>
        </div>
      </div>
      <Separator />

      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Clinic ™"
      />
      <Separator/>
      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Accounts ™"
      />
    </div>
  );
}
