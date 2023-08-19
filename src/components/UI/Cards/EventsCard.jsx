import { Paper, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useState } from "react";
import Button from "../Button";

const EventsCard = ({ title, image, venue }) => {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
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
          className="w-1/6 text-center text-green-600 font-bold p-2 hover:text-emerald-400 "
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
          <Button className="mt-4 bg-transparent text-green-700 hover:bg-transparent hover:text-emerald-400  ">
            Learn More
          </Button>
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
