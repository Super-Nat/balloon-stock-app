const FinderBorder = ({ detected }: { detected: boolean }) => {
  const color = detected ? "border-emerald-400" : "border-white";

  return (
    <div className="relative w-[280px] aspect-square">
      <span
        className={`absolute top-0 left-0 w-7 h-7 border-t-4 border-l-4 ${color} rounded-tl-lg`}
      />
      <span
        className={`absolute top-0 right-0 w-7 h-7 border-t-4 border-r-4 ${color} rounded-tr-lg`}
      />
      <span
        className={`absolute bottom-0 left-0 w-7 h-7 border-b-4 border-l-4 ${color} rounded-bl-lg`}
      />
      <span
        className={`absolute bottom-0 right-0 w-7 h-7 border-b-4 border-r-4 ${color} rounded-br-lg`}
      />
    </div>
  );
};

export default FinderBorder;
