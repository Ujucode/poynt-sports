import AthleteCard from "../UI/Cards/AthleteCard";

const randomNames = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Alice Brown",
  "Robert Lee",
];

const SupportsTab = () => {
  return (
    <div className="grid grid-cols-1 ">
      {randomNames.map((name, index) => (
        <AthleteCard key={index} name={name} />
      ))}
    </div>
  );
};

export default SupportsTab;
