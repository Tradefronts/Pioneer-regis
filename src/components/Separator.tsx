const Separator = () => {
  return (
    <div className="relative w-full">
      {/* <div className="border-b border-dashed border-[#E0E0E0]" /> */}
      <div
        className="border-b-2 border-dashed border-red-500 "
        style={{
          borderImage: `repeating-linear-gradient(
                        to right,
                        #D6D6D6 0 8px,
                        transparent 6px 14px
                        ) 1`,
        }}
      />

      <div
        className="absolute left-0 top-1/2
                   -translate-y-1/2 -translate-x-1/2
                   h-2.5 w-2.5 rounded-full bg-white border  border-red-500 z-10"
      />
      <div
        className="absolute right-0 top-1/2
                   -translate-y-1/2 translate-x-1/2
                   h-2.5 w-2.5 rounded-full bg-white border border-red-500 z-10"
      />
      <div>heyy</div>
    </div>
  );
};
export default Separator;
