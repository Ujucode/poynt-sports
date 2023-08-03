import AthleteCard from "./AthleteCard";

const Supports = () => {
  // Array of random names
  const randomNames = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Alice Brown',
    'Robert Lee',
  ];

  return (
            <div className="container mx-20 grid grid-cols-3 ">
          {randomNames.map((name, index) => (
            <AthleteCard key={index} name={name} />
          ))}
         </div>

        
  );
};

export default Supports;