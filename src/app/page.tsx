import Hero from "@/components/Hero";
import Image from "next/image";
import images, { homeContent } from "../config/images";
import { FaArrowRightLong } from "react-icons/fa6";
import Bottom from "@/components/Bottom";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <div className="">
      {/* HERO SECTION */}
      <div
        className="w-full px-4 sm:px-8 md:px-12 pb-10"
    //     style={{
    //       borderImage: `repeating-linear-gradient(
    //   to right,
    //   #D6D6D6 0 8px,
    //   transparent 8px 20px
    // ) 1`,
    //     }}
      >
        <div className="pt-16 sm:pt-24 md:pt-32 ">
          <div className="sm:text-2xl md:text-3xl space-y-3 font-dm-sans tracking-tight ">
            <h1>Softwares to power mission critical tasks.</h1>
            <h1>Used by over 1,000 professionals across India.</h1>
          </div>
          <div className="py-8 sm:py-12 md:py-10 text-[#9C9C9C] text-sm">
            <p>
              How our software scales from 5 operations per second to 1M
              operations per second in a blink on demand.
            </p>
            <button className="flex items-center gap-2 mt-2">
              Read Report <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="w-full my-2 p-2 grid grid-cols-[67%_33%] gap-5">
          {homeContent.heroImages.map((item, index) => (
            <div
              key={`hero-image-${index + 1}`}
              className={`bg-neutral-400 min-h-64 rounded-xl overflow-hidden ${
                index === 0 && "row-span-2"
              }`}
            >
              <Image
                alt=""
                src={item}
                className="object-cover w-full h-full"
                height={1080}
                width={1920}
              />
            </div>
          ))}
        </div>
      </div>
      <Separator/>
      <div
        className="w-full flex flex-col lg:flex-row px-4 md:px-12 py-10 border-b border-transparent"
        style={{
          borderImage: `repeating-linear-gradient(
      to right,
      #D6D6D6 0 8px,
      transparent 8px 20px
    ) 1`,
        }}
      >
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:px-0 px-2">
          <div className="border-[#D9D9D9] border-2 rounded-3xl w-fit px-4 py-1 text-center text-sm sm:text-base">
            Our Story
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:px-6 px-4 space-y-4 tracking-tighter">
          <p className="text-2xl sm:text-3xl md:text-[40px] leading-snug">
            We build software for work that matters. For decisions that can't be
            undone.{" "}
            <span className="text-blue-500">
              For numbers that must be right. For systems people trust with
              everything.
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-[18px] text-[#9C9C9C]">
            Behind every report, every record, every asset — there's a
            responsibility. Pioneer Regis designs for that weight.
          </p>
        </div>
      </div>
      <Separator/>
      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Clinic ™"
      />
      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Accounts ™"
      />
    </div>
  );
}
