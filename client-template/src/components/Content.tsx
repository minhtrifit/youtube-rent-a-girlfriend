import Select, { SingleValue } from "react-select";

import Card from "./Card";

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
    <div className="bg-white min-h-screen flex flex-col mt-7 rounded-md p-10">
      <Select
        className="w-[300px] h-[40px] mb-10"
        options={options}
        placeholder="Sort by"
        onChange={(e) => {
          handleSort(e);
        }}
      />
      <div className="flex gap-20 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
