type Width = "sm" | "md" | "lg"

type SectionProps = {
    title: string;
    size?: Width;
    align?:string
};


const sizeClasses: Record<Width, string> = {
    sm: "w-24",
    md: "w-28",
    lg: "w-40",
};

const SectionTitle = ({
    title,
    size="md",
    align
}: SectionProps) => {
    return (
        <div
            className={`
         ${sizeClasses[size]}
        border-2 border-[#D9D9D9]
        rounded-full px-3 py-1
        text-xs font-medium
        whitespace-nowrap ${align==="center"?"text-center":"text-end"}
      `}
        >
            {title}
        </div>
    );
};

export default SectionTitle;
