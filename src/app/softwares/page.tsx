import Button from "@/components/Button";
import Image from "next/image";
import Separator from "@/components/Separator";
import { GoArrowRight } from "react-icons/go";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import images, { homeContent } from "../../config/images";

const Software = () => {
  return (
    <div>
      <div className=" w-full md:min-h-[367px] py-10  lg:px-14 md:px-10 px-5 flex flex-col justify-end">
        <div className="flex md:flex-row flex-col justify-between md:gap-8 xl:pb-0 lg:pb-5 md:pb-3 pb-0 ">
          <div className="flex-1 md:w-[50%] w-full flex items-start ">
            <div className="md:space-y-5 space-y-3">
              <h1 className="sm:text-2xl md:text-3xl text-xl font-medium font-dm-sans tracking-tight">
                Pioneer Regis<sup>®</sup> Labs
              </h1>
              <p className="text-[#9C9C9C] lg:text-base md:text-sm text-xs">
                The must have essential software to run operations in a trusted
                clinic. <br className="xl:block hidden" />
                From your local general clinic to super speciality clinics.
              </p>
            </div>
          </div>

          <div className="md:w-[50%] w-full md:pb-0 md:py-0 py-5  xl:pr-2 ">
            <div className="flex xl:justify-center xl:items-center relative ">
              <div className="relative xl:h-[160px] xl:w-[250px] md:h-[130px] md:w-[220px] w-full sm:h-[210px]  h-[160px] rounded-lg z-10 lg:left-8 xl:left-0 left-0">
                <Image
                  src={images.softwareImg}
                  alt="heroimage"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="md:block hidden  xl:h-[160px] xl:w-[250px] h-[130px] w-[200px] bg-gray-200 rounded-lg absolute xl:left-1/2 lg:left-44 right-0 bottom-1/2  "></div>
            </div>
          </div>
        </div>

        <div className=" w-full flex md:flex-row flex-col lg:items-center justify-between gap-2 ">
          <div className="flex md:flex-row flex-col item-center gap-3">
            {/* <Button
              name="SCHEDULE A DEMO"
              bgColor="#5B2EE1"
              textColor="#FFFFFF"
              border="#5B2EE1"
            /> */}
            <Button name="SCHEDULE A DEMO" variant="primary" />

            <Button name="CONTACT US" variant="secondary" />
          </div>
          <span className="font-[600] text-xs text-[#222222] mt-3">
            REQUEST QUOTE
          </span>
        </div>
      </div>
      <Separator />

      {/* Screenshots */}
      <Section className="md:space-y-12 space-y-10">
        <SectionTitle title="Screenshots" size="lg" />
        <div className="space-y-5">
          <div className=" w-full my-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[67%_33%] gap-5">
            {homeContent.heroImages.map((item, index) => (
              <div
                key={`hero-image-${index + 1}`}
                className={`
                  bg-neutral-400 min-h-64 rounded-xl overflow-hidden
                  ${
                    index === 0
                      ? "md:col-span-2 lg:col-span-1 lg:row-span-2"
                      : ""
                  }
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
          <div className="flex items-center justify-end">
            <button className="text-gray-400 flex items-center gap-2 md:text-sm text-xs">
              See more screenshots <GoArrowRight />
            </button>
          </div>
        </div>
      </Section>
      <Separator />

      {/* Synopsis */}
      <Section className="w-full flex lg:flex-row flex-col justify-between items-start lg:space-y-12 space-y-10">
        <SectionTitle title="Synopsis" size="sm" />
        <div className="lg:w-[40%] w-full lg:text-[38px] text-[30px] space-y-3 ">
          <p className="text-2xl sm:text-3xl md:text-[36px] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            turpis dui,
            <span className="text-[#1100FF]">
              eleifend accumsan quam. Nunc non leo vestibulum, laoreet tortor
              sed, suscipit enim.
            </span>
          </p>
          {/* <p className="text-sm sm:text-base md:text-[18px] text-[#9C9C9C]"> */}
          <p className="text-base text-[#9C9C9C]">

            Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut
            elit sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit
            amet mi pellentesque, volutpat eros a, consectetur neque.
          </p>
        </div>
      </Section>
      <Separator />
      
      {/* Training Resources */}
      <Section className="lg:space-y-12 space-y-10">
        <SectionTitle title="Training Resources" size="xl" />
        <div className="w-full flex lg:flex-row flex-col lg:items-center gap-5 ">
          {images.bottom.map((img, inx) => (
            <div
              key={inx}
              className=" relative lg:w-1/4  w-full lg:h-[345px] md:h-[300px] h-[180px] shadow-md bg-gray-100 rounded-lg"
            >
              <Image
                src={img}
                alt="heroimage"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </Section>
      <Separator />

      {/* Certification */}
      <Section className="lg:space-y-12 space-y-10 flex flex-col items-center justify-center">
        <SectionTitle title="Certification" align="center" />
        <div className=" flex flex-col items-center justify-center gap-8">
          <div className="sm:text-2xl  md:text-3xl font-medium  flex flex-col items-center gap-2 tracking-tight">
            <h6>Become a</h6>
            <h6>Certified Connected Clinic Operator </h6>
          </div>
          <div className=" flex items-center justify-center">
            <p className="text-[#9C9C9C] md:text-base text-xs text-center">
              Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut
              elit <br className="md:block hidden" />
              sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit
              <br className="md:block hidden" />
              amet mi pellentesque, volutpat eros a, consectetur neque.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Software;
