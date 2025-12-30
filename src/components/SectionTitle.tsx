type Width = "sm" | "md" | "lg"|"xl"

type SectionProps = {
    title: string;
    size?: Width;
    align?:string
};

const sizeClasses: Record<Width, string> = {
    sm: "w-24",
    md: "w-28",
    lg:"w-32",
    xl: "w-40",
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
        rounded-full px-3 py-1.5
        text-xs font-medium tracking-tight
        whitespace-nowrap ${align==="center"?"text-center":"text-end"}
      `}>
            {title}
        </div>
    );
};

export default SectionTitle;
