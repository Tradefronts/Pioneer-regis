import Image from "next/image";
import { homeContent } from "../config/images";
import { FaArrowRightLong } from "react-icons/fa6";
import Separator from "@/components/Separator";
import SectionTitle from "@/components/SectionTitle";
import HomeCard from "@/components/card/HomeCard";
import connectedAccountsSections from "../config/connectedAccountsSections"


export default function Home() {
  return (
    <div className="">
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

      <div className="w-full flex flex-col lg:flex-row px-4 md:px-12 py-10">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 ">
          <SectionTitle title="Our Story" size="sm" />
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
      <div>
        {connectedAccountsSections.map((section) => (
          <div
            key={section.id}
            className="lg:py-10 py-8 lg:px-14 md:px-10 px-5"
          >
            <div className="py-10 md:space-y-12 space-y-10">
              <div className="text-xs border border-black/10 w-fit px-4 h-6 flex items-center justify-center rounded-full">
                {section.heading}
              </div>

              <div>
                <p className="sm:text-2xl md:text-3xl text-xl font-medium tracking-tight">
                  {section.subHeading}
                </p>
                <p className="text-base text-[#9C9C9C] pt-4">
                  The must have essential software to run operations in a
                  trusted clinic.
                  <br /> From your local general clinic to super speciality
                  clinics.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg">
              <div className="hidden lg:block relative w-full h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={section.backgroundImage}
                  alt="heroimage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="relative lg:absolute lg:bottom-10 w-full lg:px-16">
                <div className="max-w-7xl mx-auto bg-white rounded-xl border border-gray-300 p-4 sm:py-6 sm:px-4 shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {section.cards.map((card) => (
                      <HomeCard
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
