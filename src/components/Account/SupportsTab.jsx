import { Box } from "@mui/material";
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
    <Box className="grid grid-cols-3 gap-10 ">
      {randomNames.map((name, index) => (
        <AthleteCard className="" key={index} name={name} />
      ))}
    </Box>
  );
};

export default SupportsTab;
