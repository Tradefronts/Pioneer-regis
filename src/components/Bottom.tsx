import images from "../config/images";
import Image from "next/image";
import HomeCard from "./card/HomeCard";
import { FiAlertOctagon } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import SectionTitle from "./SectionTitle";

type BottomProps = {
  heading: string;
  subHeading: string;
};

const Bottom = ({ heading, subHeading }: BottomProps) => {
  return (
    <>
    
      <div className="lg:py-10 py-8 lg:px-14 md:px-10 px-5">
      <div className="py-10 md:space-y-12 space-y-10">
        {/* <div className="border-[#D9D9D9] border-2 rounded-3xl w-[200px] text-center mb-3 py-1">
          {heading}
        </div> */}
        <SectionTitle title={heading} size="xl"/>
        <div className="">
            <p className="sm:text-2xl md:text-3xl text-xl font-medium tracking-tight">{subHeading}</p>
          <p className=" text-base text-[#9C9C9C] pt-4">
            The must have essential software to run operations in a trusted
            clinic.
            <br /> From your local general clinic to super speciality clinics.
          </p>
        </div>
      </div>
      <div className="relative rounded-lg">
        <div className="hidden lg:block relative w-full h-[600px] rounded-lg overflow-hidden">
          <Image
            src={images.home}
            alt="heroimage"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="relative lg:absolute lg:bottom-10  
               w-full lg:px-16"
        >
          <div
            className="max-w-7xl mx-auto bg-white 
                 rounded-xl border border-gray-300 
                 p-4 sm:py-6 sm:px-4 shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <HomeCard
                icon={FiAlertOctagon}
                title="The Problem"
                description="Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut elit sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit amet mi pellentesque, volutpat eros a, consectetur neque."
              />

              <HomeCard
                icon={IoMdCheckmarkCircleOutline}
                title="The Solution"
                description="Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut elit sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit amet mi pellentesque, volutpat eros a, consectetur neque."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Bottom;





