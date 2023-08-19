import { Divider, Paper, Typography } from "@mui/material";
import Main from "../components/Layout/Main";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Link, useParams } from "react-router-dom";
import Button from "../components/UI/Button";

const EventsDetailPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <Main className="relative">
      <Link to="..">
        <Button className="absolute top-5 py-2">Back</Button>
      </Link>
      <div className="flex flex-col gap-5 my-5 w-3/4 mx-auto">
        <div className="h-[450px] ">
          <img
            src="https://images.pexels.com/photos/1555351/pexels-photo-1555351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="event hero"
            className="w-full h-full object-cover object-top rounded"
          />
        </div>

        <Paper elevation={6} className=" mx-auto bg-gray-200/50 p-4">
          <div className="uppercase bg-green-700 hover:bg-green-800 p-1 mb-2 rounded shadow text-center text-gray-800 flex items-center w-max">
            <div>
              <LocationOnIcon className="text-white" />
            </div>
            <Typography variant="h5" className="text-white font-medium mr-2">
              Jorhat
            </Typography>
          </div>
          <div className="mb-2">
            <Typography variant="h5" className="text-gray-900/70 font-bold">
              Marathon
            </Typography>
          </div>
          <div className="mb-2">
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              provident mollitia dolor alias commodi laboriosam, laudantium
              totam possimus earum illum. Eligendi consectetur laudantium
              dolorem neque deserunt eius soluta? Soluta, reprehenderit?{" "}
            </Typography>
          </div>
        </Paper>

        <Paper
          elevation={6}
          className="w-full mx-auto bg-gray-200/60 p-4 flex flex-col gap-5"
        >
          <div className="text-gray-900/60">
            <div className="flex justify-between items-center">
              <Typography
                variant="h5"
                className="ml-1 font-bold text-gray-900/70  "
              >
                Venue
              </Typography>
              <Link>
                <Button className="p-2 w-20">Join</Button>
              </Link>
            </div>

            <div className="uppercase rounded flex items-center w-max">
              <LocationOnIcon className="text-left text-green-700 hover:text-green-900" />
              <Typography variant="h6" className="">
                JEC, Garmur, Assam, 785001
              </Typography>
            </div>
          </div>

          <Divider />

          <div className="flex text-gray-900/60">
            <div className="grow flex gap-2 items-center  ">
              <CalendarMonthIcon className="text-green-700 hover:text-green-900" />
              <Typography className="">{new Date().toDateString()}</Typography>
            </div>
            <div className="grow flex gap-2 items-center">
              <AccessTimeFilledIcon className="text-green-700 hover:text-green-900" />
              <Typography className="">
                {new Date().toLocaleTimeString()}
              </Typography>
            </div>
          </div>
        </Paper>
      </div>
    </Main>
  );
};

export default EventsDetailPage;
