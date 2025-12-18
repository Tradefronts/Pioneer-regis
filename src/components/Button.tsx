import React from 'react'
type ButtonProps={
name:string, bgColor:string, textColor:string, border:string,isShow?:string
}

const Button = ({ name, bgColor, textColor, border,isShow=""}:ButtonProps) => {
    return (
        <div
        style={{ backgroundColor:bgColor,
                color: textColor,
                borderColor: border
        }}
        className = {`${isShow}  rounded-full px-10 py-2 xl:text-sm md:text-xm text-xs border-2 text-center`} > { name }

        </div >
    )
}

export default Button