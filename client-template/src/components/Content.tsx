import Select, { SingleValue } from "react-select";

const Content = () => {
  const options = [
    { value: "ratingup", label: "Rating Up" },
    { value: "ratingdown", label: "Rating Down" },
  ];

  const handleSort = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    console.log(selectedOption);
  };

  return (
    <div className="bg-white flex justify-between mt-7 rounded-md p-10">
      <Select
        className="w-[300px] h-[40px]"
        options={options}
        placeholder="Sort by"
        onChange={(e) => {
          handleSort(e);
        }}
      />
    </div>
  );
};

export default Content;
