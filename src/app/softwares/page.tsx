import Button from "@/components/Button";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Software = () => {
  return (


    <div className="">
      <div className=" w-full lg:min-h-[470px]  py-16 lg:px-12 px-10    border-b-2 border-dashed border-[#D6D6D6] flex flex-col justify-end ">
        <div className="flex lg:flex-row flex-col justify-between " >
          <div className="h-full space-y-3 lg:w-[50%] w-full">
            <h6 className="font-extralight text-[38px]">
              Pioneer® Connected Accounts™
            </h6>
            <p className="text-[#9C9C9C] text-[18px]">
              The must have essential software to run operations in a trusted
              clinic. <br/>From your local general clinic to super speciality clinics.
            </p>

          </div>

          <div className="lg:w-[50%] w-full ">
            <div className="flex justify-center items-center relative">
              <div className="h-[193.49px] w-[311px] bg-red-400 rounded-lg z-10"></div>

              <div className="h-[193.49px] w-[311px] bg-yellow-800 rounded-lg absolute left-1/2 bottom-1/2"></div>
            </div>
          </div>

        </div>

        <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between gap-2">
           <div className="flex md:flex-row flex-col item-center gap-3">
                   <Button
                      name="SCHEDULE A DEMO"
                      bgColor="#5B2EE1"
                       textColor="#FFFFFF"
                       border="#5B2EE1"
                     />
                     <Button name="CONTACT US" bgColor="#F1F1F1" textColor="#5B2EE1" border="#5B2EE1"/>
          </div>
          <span className="text-[16px] text-[#222222]">REQUEST QUOTE</span>
        </div>

      </div>

      {/* Screenshots */}
      <div className="lg:p-12 p-8 pb-18 border-b-2 border-dashed border-[#D6D6D6] lg:space-y-16 space-y-10">

        <div className="border border-[#D9D9D9] rounded-full w-[157px] text-end pr-5 py-0.5">
          <span className="text-[14px]">Screenshot</span>
        </div>

        <div>
          <div className="w-full flex lg:flex-row flex-col gap-4">
            <div className="lg:w-[977px] h-[500px] bg-gray-100 rounded-lg"></div>
            <div className="lg:space-y-4 space-x-4 flex lg:flex-col flex-row">
              <div className="w-[400px] h-[242px] bg-gray-100 rounded-lg"></div>
              <div className="w-[400px] h-[242px] bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          <div className=" mt-7 flex items-center justify-end text-[#9C9C9C] gap-1 text-[14px]">
            <span >View More Screenshots</span>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>

      {/* Synopsis */}
      <div className="lg:p-12 p-8 border-b-2 border-dashed border-[#D6D6D6] ">
        <div className="w-full flex lg:flex-row flex-col justify-between items-start lg:space-y-16 space-y-10">
          <div className="lg:w-[60%] w-full ">
            <div className="border border-[#D9D9D9] rounded-full w-[115px] text-end pr-5 py-0.5">
              <span className="text-[14px]">Synopsis</span>
            </div>
          </div>

          <div className="lg:w-[40%] w-full lg:text-[38px] text-[30px] space-y-3 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              turpis dui,
              <span className="text-[#1100FF]">
                {" "}
                eleifend accumsan quam. Nunc non leo vestibulum, laoreet tortor
                sed, suscipit enim.
              </span>
            </p>
            <p className="text-[18px] text-[#9C9C9C]">
              Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut
              elit sapien, porttitor eget diam et, dictum sagittis urna. Fusce
              sit amet mi pellentesque, volutpat eros a, consectetur neque.
            </p>
          </div>
        </div>
      </div>

      {/* Training Resources */}
      <div className="lg:p-12 p-8 border-b-2 border-dashed border-[#D6D6D6] lg:space-y-16 space-y-10">
        <div className="border border-[#D9D9D9] rounded-full w-[198px] text-end pr-5 py-0.5">
          <span className="text-[14px]">Training Resources</span>
        </div>
        <div className="w-full flex lg:flex-row flex-col lg:items-center gap-5 ">
          {/* <div className="lg:w-[335px] w-full h-[345px] bg-gray-100 rounded-lg"></div> */}
          <div className="lg:w-1/4  w-full h-[345px] bg-gray-100 rounded-lg"></div>

          <div className="lg:w-1/4  w-full h-[345px] bg-gray-100 rounded-lg"></div>
          <div className="lg:w-1/4  w-full h-[345px] bg-gray-100 rounded-lg"></div>
          <div className="lg:w-1/4  w-full h-[345px] bg-gray-100 rounded-lg"></div>
        </div>
      </div>

      {/* Certification */}
      <div className="lg:p-12 p-8 border-b-2 border-dashed border-[#D6D6D6] lg:space-y-12 space-y-10 flex flex-col items-center justify-center">
        <div className="border border-[#D9D9D9] rounded-full w-[198px] text-center  py-0.5  ">
          <span className="text-[14px]">Certification</span>
        </div>
        <div className=" flex flex-col items-center justify-center gap-2">
          <div className="lg:text-[38px] md:text-3xl text-[13px]  flex flex-col items-center">
            <h7>Become a</h7>
            <h7>Certified Connected Clinic Operator </h7>
          </div>

          <div className=" flex items-center justify-center">
            <p className="text-[#9C9C9C] lg:text-[18px] md:text-sm text-xs text-center">
              Nulla facilisi. Fusce sit amet arcu nec enim fringilla lacinia. Ut
              elit <br />
              sapien, porttitor eget diam et, dictum sagittis urna. Fusce sit
              <br />
              amet mi pellentesque, volutpat eros a, consectetur neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
