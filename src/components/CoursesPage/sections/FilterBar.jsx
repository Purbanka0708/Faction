const FilterBar = () => {
  return (
    <div className="sticky top-[72px] z-40 bg-[#F8F4E8] shadow">
      <div className="container mx-auto px-6 py-4 flex flex-wrap gap-4">

        {["Class", "Subject", "Exam"].map((label) => (
          <select
            key={label}
            className="border border-[#2D0B34]/30 bg-[#F8F4E8] px-3 py-2 rounded text-[#2D0B34]"
          >
            <option>{label}</option>
          </select>
        ))}

        <select className="border border-[#2D0B34]/30 bg-[#F8F4E8] px-3 py-2 rounded ml-auto text-[#2D0B34]">
          <option>Sort By</option>
        </select>

      </div>
    </div>
  );
};

export default FilterBar;
