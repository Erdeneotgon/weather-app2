import { useState } from "react";

export const Input = ({ formattedCityName, setCityName, cityNames }) => {
  const [inputValue, setInputValue] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [optionValue, setOptionValue] = useState("");

  const handleInputValue = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredCityName = formattedCityName
      .filter((cityName) =>
        cityName.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5);
    setFilteredData(filteredCityName);
  };

  const handleOptionValue = (event) => {
    console.log("event", event);

    const value = event.target.value;
    setCityName(value);
  };

  return (
    <div className="rounded-2xl  w-52">
      <input
        type="text"
        value={inputValue}
        className="border rounded-lg"
        onChange={handleInputValue}
      />
      <select name="cityName" value={optionValue} onChange={handleOptionValue}>
        {filteredData.map((city) => {
          return( <option value={city}>{city}</option>);
        })}
      </select>
    </div>
  );
};
