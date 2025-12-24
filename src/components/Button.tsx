// import React from 'react'
// type ButtonProps={
// name:string, bgColor:string, textColor:string, border:string,isShow?:string
// }

// const Button = ({ name, bgColor, textColor, border,isShow=""}:ButtonProps) => {
//     return (
//         <div
//         style={{ backgroundColor:bgColor,
//                 color: textColor,
//                 borderColor: border
//         }}
//         className = {`${isShow}  rounded-full px-10 py-2 xl:text-sm md:text-xm text-xs border-2 text-center`} > { name }

//         </div >
//     )
// }

// export default Button



type ButtonVariant = "primary" | "secondary" | "dark";

type ButtonProps = {
  name: string;
  variant?: ButtonVariant;
  className?: string;
  isShow?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#5B2EE1] text-white border-[#5B2EE1]",
  secondary: "bg-[#F1F1F1] text-[#5B2EE1] border-[#5B2EE1]",
  dark: "bg-[#3B3B3B] text-white border-[#E2E2E2]",
};

const Button = ({
  name,
  variant = "primary",
  className = "",
  isShow = "",
}: ButtonProps) => {
  return (
    <button
      className={`
        ${isShow}
        ${variants[variant]}
        ${className}
        rounded-full lg:px-10 px-7  lg:py-2 md:py-1 py-1.5
        border-2 text-center
        xl:text-sm lg:text-sm text-xs
        hover:opacity-90 transition
      `}
    >
      {name}
    </button>
  );
};

export default Button;
