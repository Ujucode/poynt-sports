import { MobileDatePicker } from "@mui/x-date-pickers";
import { Paper, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useState } from "react";

const EventsCard = ({ title, description, image, venue }) => {
  const [clicked, setClicked] = useState(true);
  const handleClick = (e) => {
    setClicked(!clicked);
  };
  return (
    <Paper elevation={5} className="rounded-md h-[23rem] flex flex-col">
      <Box className="h-3/6 ">
        <img
          src={image}
          alt="event"
          className="rounded-t-md block object-cover  mx-auto w-full h-full"
        />
      </Box>

      <Box className="h-2/6 px-4 pt-4 flex gap-5 ">
        <Typography
          variant="h5"
          className="w-1/6 text-center text-emerald-600 font-bold p-2  "
          wrap="true"
        >
          Mar, 27
        </Typography>
        <Box className="grow p-2 ">
          <Typography
            variant="h5"
            className=" text-gray-900/80 font-bold uppercase"
            wrap="true"
          >
            {title}
          </Typography>
          <Typography variant="h6" className="text-gray-900/60 ">
            Venue
          </Typography>
          <Typography variant="body2" className=" text-gray-900/70   ">
            <LocationOnIcon /> {venue}
          </Typography>
          <button className="mt-4 text-emerald-600">Learn More</button>
          <Box
            className="px-2 inline  text-gray-900/70 w-min cursor-pointer "
            onClick={handleClick}
          >
            {clicked ? (
              <BookmarkIcon fontSize="large" className="" />
            ) : (
              <BookmarkAddedIcon fontSize="large" />
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default EventsCard;
