import Image from "next/image";
import { Home, MapPin, Heart,User } from "lucide-react";


export const Night = ({ nightTemp, dayDate, dayMood, cityNames }) => {
  return (
    <div className="flex flex-col gap-5">
      <p>{dayDate}</p>
      <p className="text-4xl  ">{cityNames}</p>
      <Image src="/images/moon.png" width={210} height={210} />
      <div className="text-7xl">{nightTemp}</div>
      <p>{dayMood}</p>
      <div className="flex gap-20">
      <Home/>
        <MapPin/>
        <Heart/>
        <User/>
      </div>
    </div>
  );
};
