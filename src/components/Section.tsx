type SectionProps = {
    children: React.ReactNode;
    className?: string;
};

const Section = ({ children, className = "" }: SectionProps) => {
    return (
        <div className={`lg:py-16 py-8 lg:px-14 md:px-10 px-5 ${className}`}>
            {children}
        </div>
    );
};

export default Section;
