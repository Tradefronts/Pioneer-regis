import Button from "@/components/Button";
import images from "../../config/images";
import Image from "next/image";
import Separator from "@/components/Separator";
import { GoArrowRight } from "react-icons/go";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";

const Software = () => {
  return (
    <div className="font-dm-sans">
      <div
        className=" w-full md:min-h-[367px] py-10  lg:px-14 md:px-10 px-5 flex flex-col justify-end"
      >
        <div className="flex md:flex-row flex-col justify-between md:gap-8 lg:pb-0 md:pb-3 pb-0">
          <div className="flex-1 md:w-[50%] w-full flex items-start ">
            <div className="md:space-y-5 space-y-3">
              <h1 className="sm:text-2xl md:text-3xl text-xl font-medium tracking-tight">
                Pioneer Regis<sup>®</sup> Labs
              </h1>
              <p className="text-[#9C9C9C] md:text-base text-xs">
                The must have essential software to run operations in a trusted
                clinic. <br className="xl:block hidden" />
                From your local general clinic to super speciality clinics.
              </p>
            </div>
          </div>

          <div className="md:w-[50%] w-full md:pb-0 md:py-0 py-5  xl:pr-2">
            <div className="flex xl:justify-center xl:items-center relative ">
              <div className="relative xl:h-[160px] xl:w-[250px] md:h-[130px] md:w-[220px] w-full  h-[160px] rounded-lg z-10 lg:left-8 xl:left-0 left-0">
                <Image
                  src={images.softwareImg}
                  alt="heroimage"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="md:block hidden  xl:h-[160px] xl:w-[250px] h-[130px] w-[200px] bg-gray-200 rounded-lg absolute xl:left-1/2  right-0 bottom-1/2  "></div>
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

      <Section className="md:space-y-12 space-y-10">
        <SectionTitle title="Screenshots" />
        <div className="space-y-5">
          <div className="w-full h-[600px]  grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-5 ">
            <div className="lg:col-span-2 h-full">
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src={images.dashboard}
                  alt="heroimage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className=" h-full flex lg:flex-col sm:flex-row flex-col lg:gap-8 gap-5">
              <div className="relative flex-1   rounded-xl overflow-hidden">
                <Image
                  src={images.main}
                  alt="heroimage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1  rounded-xl overflow-hidden">
                <Image
                  src={images.main}
                  alt="heroimage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="text-gray-400 flex items-center gap-2 md:text-sm text-xs">
              See more screenshots <GoArrowRight />
            </button>
          </div>
        </div>
      </Section>

      <Separator />

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
          <p className="text-sm sm:text-base md:text-[18px] text-[#9C9C9C]">
            Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut
            elit sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit
            amet mi pellentesque, volutpat eros a, consectetur neque.
          </p>
        </div>
      </Section>

      <Separator />

      <Section className="lg:space-y-12 space-y-10">
        <SectionTitle title="Training Resources" size="lg" />
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

      <Section className="lg:space-y-12 space-y-10 flex flex-col items-center justify-center">
        <SectionTitle title="Certification" align="center" />
        <div className=" flex flex-col items-center justify-center gap-2">
          <div className="lg:text-[38px] md:text-3xl text-[13px]  flex flex-col items-center">
            <h6>Become a</h6>
            <h6>Certified Connected Clinic Operator </h6>
          </div>
          <div className=" flex items-center justify-center">
            <p className="text-[#9C9C9C] lg:text-[18px] md:text-sm text-xs text-center">
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
