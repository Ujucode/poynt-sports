import {
  FormControl,
  FormLabel,
  Typography,
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import TextEditor from "../UI/TextEditor";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useRef, useState } from "react";

const CreateEventTab = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const uploadRef = useRef();

  const handleUpload = () => {
    uploadRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      "event-title": data.get("event-title"),
      "event-location": data.get("event-location"),
      address: data.get("address"),
      state: data.get("state"),
      city: data.get("city"),
      "start-date-time-picker": new Date(startDate).toLocaleString(),
      "end-date-time-picker": new Date(endDate).toLocaleString(),
      "all-day-event": data.get("all-day-event"),
      "hide-event-time": data.get("hide-event-time"),
      "hide-event-end-time": data.get("hide-event-end-time"),
      recurring: data.get("recurring"),
    });
  };

  return (
    <FormControl
      className="w-5/6 gap-2 "
      component={"form"}
      onSubmit={handleSubmit}
    >
      {/* <FormControlLabel
        required
        control={<TextField id="event-title" />}
        label="Event Title"
        labelPlacement="top"
      /> */}
      <FormLabel>
        <Typography variant="h5" gutterBottom>
          Event Title
        </Typography>
      </FormLabel>
      <TextField id="event-title" name="event-title" />

      <FormLabel sx={{ mt: "2rem", minHeight: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Event Details
        </Typography>
      </FormLabel>
      <TextEditor id="text-editor" />

      <FormLabel sx={{ mt: "2rem" }}>
        <Typography variant="h5" gutterBottom>
          Date And Time
        </Typography>
      </FormLabel>
      <Box className=" flex gap-2">
        <MobileDateTimePicker
          name="start-date-time-picker"
          id="start-date-time-picker"
          label="Start Date And Time"
          ampm
          value={startDate}
          onChange={(e) => setStartDate(e)}
        />
        <MobileDateTimePicker
          name="end-date-time-picker"
          id="end-date-time-picker"
          label="End Date And Time"
          ampm
          value={endDate}
          onChange={(e) => setEndDate(e)}
        />
      </Box>

      <FormGroup row>
        <FormControlLabel
          control={<Checkbox />}
          label="All Day Event"
          name="all-day-event"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Hide Event Time"
          name="hide-event-time"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Hide Event End Time"
          name="hide-event-end-time"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Recurring ?"
          name="recurring"
        />
      </FormGroup>

      <FormLabel sx={{ mt: "2rem" }}>
        <Typography variant="h5" gutterBottom>
          Event Location Details
        </Typography>
      </FormLabel>

      <TextField
        name="event-location"
        label="Name"
        id="event-location"
        className="w-3/6"
      />
      <TextField
        label="Address"
        id="address"
        className="w-4/6"
        name="address"
      />
      <FormGroup row sx={{ gap: 2 }}>
        <TextField label="City" id="city" name="city" />
        <TextField label="State" id="state" name="state" />
      </FormGroup>

      {/* <TextField
        type="file"
        id="Event Image"
        label="Upload Event Image "
        sx={{ style: "unset", width: "20rem" }}
      /> */}
      <input ref={uploadRef} type="file" hidden />
      <button
        className="p-2 w-40 bg-emerald-500 text-white rounded-md h-10"
        onClick={handleUpload}
      >
        Upload Event Image
      </button>
      <button
        type="submit"
        className="p-2 w-1/4 h-10 mt-20 bg-emerald-500 text-white rounded-md "
      >
        Submit
      </button>
    </FormControl>
  );
};

export default CreateEventTab;
