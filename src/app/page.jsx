"use client";

import { Day } from "@/components/Day";
import { Night } from "@/components/Night";
import { Input } from "@/components/input";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weatherData, setWeatherData] = useState();
  const [allCityName, setAllCityName] = useState();

  const weatherApiKey = process.env.WEATHER_API_KEY;

  const getWeatherData = async () => {
    const response = await axios(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
    );
    setWeatherData(response.data);
  };

  const getCityName = async () => {
    const countries = await axios(
      `https://countriesnow.space/api/v0.1/countries`
    );
    setAllCityName(countries.data.data);
  };

  const formattedCityName = allCityName?.flatMap((country) =>
    country.cities.map((city) => `${city}, ${country.country}`)
  );

  const dayTemp = weatherData?.forecast.forecastday[0].day.maxtemp_c;
  const cityNames = weatherData?.location.name;

  const nightTemp = weatherData?.forecast.forecastday[0].day.mintemp_c;

  const dayMood = weatherData?.forecast.forecastday[0].day.condition.text;

  const dayDate = weatherData?.forecast.forecastday[0].date;

  useEffect(() => {
    getWeatherData();
  }, [cityName]);

  useEffect(() => {
    getCityName();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-36">
      <div div className="flex justify-center">
        <Input
          formattedCityName={formattedCityName}
          setCityName={setCityName}
        />
      </div>
      <div className="flex justify-center gap-10 items-center ">
        <Day
          dayTemp={dayTemp}
          dayDate={dayDate}
          dayMood={dayMood}
          cityNames={cityNames}
        />
        <Night
          nightTemp={nightTemp}
          dayDate={dayDate}
          dayMood={dayMood}
          cityNames={cityNames}
        />
      </div>
    </div>
  );
}
