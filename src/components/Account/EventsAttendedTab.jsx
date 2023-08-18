import { Box } from "@mui/material";
import EventsAttendedCard from "../UI/Cards/EventsAttendedCard";

const randomNames = ["Event 1", "Event 2", "Event 3", "Event 4"];

const EventsAttended = () => {
  return (
    <Box className="grid grid-cols-3 gap-10 ">
      {randomNames.map((name, index) => (
        <EventsAttendedCard className="" key={index} name={name} />
      ))}
    </Box>
  );
};

export default EventsAttended;
