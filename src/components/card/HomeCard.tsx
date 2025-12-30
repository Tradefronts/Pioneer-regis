import React from "react";
import { IconType } from "react-icons";

type HomeCardProps={
  icon:IconType,
  title:string,
  description:string
}


const HomeCard = ({ icon, title, description }:HomeCardProps) => {
    const Icon = icon;

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 sm:p-8 md:p-8 lg:p-12">
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl
       bg-gray-100 border border-gray-200 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-inner shadow-gray-200">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-black" />
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-3 sm:mb-4 tracking-tighter">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HomeCard;
