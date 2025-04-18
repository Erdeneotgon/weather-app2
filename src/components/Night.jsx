export const Night = ({ nightTemp, dayDate, dayMood, cityNames }) => {
  return (
    <div className="flex flex-col gap-5">
      <p>{dayDate}</p>
      <p className="text-4xl">{cityNames}</p>
      <div className="text-7xl">{nightTemp}</div>
      <p>{dayMood}</p>
    </div>
  );
};
