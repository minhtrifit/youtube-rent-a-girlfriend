import Select, { SingleValue } from "react-select";

const Content = () => {
  const options = [
    { value: "ratingdown", label: "Rating Down" },
    { value: "ratingup", label: "Rating up" },
  ];

  const handleSort = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    console.log(selectedOption);
  };

  return (
    <div className="bg-white h-[150px] flex justify-between mt-7 rounded-md p-10">
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
