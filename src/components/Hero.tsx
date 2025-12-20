import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Bottom from "./Bottom";
import images from "../config/images";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Clinic ™"
      />
      <Bottom
        heading="Flagship Software"
        subHeading="Pioneer® Connected Accounts ™"
      />
    </>
  );
};

export default Hero;
