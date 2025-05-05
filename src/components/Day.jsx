import { Home, MapPin, Heart, User } from "lucide-react";
import Image from "next/image";

export const Day = ({ dayTemp, dayDate, dayMood, cityNames }) => {
  return (
    <div className="flex flex-col gap-5 h-120">
      <div className=" ">
        <p>{dayDate}</p>
        <p className="text-4xl">{cityNames}</p>
        <Image src="/images/sun.png" width={210} height={210} />
        <div className="text-7xl">{dayTemp}</div>
        <p>{dayMood}</p>
        <div className="flex gap-20">
          <Home />
          <MapPin />
          <Heart />
          <User />
        </div>
      </div>
    </div>
  );
};
