import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormLabel, Select, MenuItem, Box } from "@mui/material";

import { MobileDatePicker } from "@mui/x-date-pickers";
// import { useState } from "react";
// import Select from '@mui/material/Select';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

const options = [
  { label: "Under 10th", value: "under 10th" },
  { label: "10+", value: "10+" },
  { label: "12+", value: "12+" },
  { label: "Graduate", value: "graduate" },
  { label: "Master", value: "master" },
  { label: "PhD", value: "phd" },
];

export default function EducationTab() {
  // const [fruit, setFruit] = useState("apple");
  return (
    <Box className="w-full flex flex-col gap-2 " component={"form"}>
      <FormLabel>
        <Typography variant="h5" gutterBottom>
          Education Qualification
        </Typography>
      </FormLabel>

      <TextField
        type="text"
        variant="outlined"
        size="small"
        label="Institute name"
        fullWidth
        autoComplete="given-name"
      />

      <FormLabel className="mt-5">
        <Typography variant="h5" gutterBottom>
          Degree
        </Typography>
      </FormLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        fullWidth
      >
        {options.map((item) => {
          return (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>

      <FormLabel className="mt-5">
        <Typography variant="h5" gutterBottom>
          Field of Study
        </Typography>
      </FormLabel>

      <TextField
        type="text"
        variant="outlined"
        size="small"
        label="Field Of Study"
        fullWidth
        autoComplete="given-name"
      />

      <FormLabel className="mt-5">
        <Typography variant="h5" gutterBottom>
          Duration
        </Typography>
      </FormLabel>

      <Box className="flex gap-5">
        <MobileDatePicker
          label="Start Date"
          name="start-date"
          id="start-date"
          ampm
          // value={startDate}
          // onChange={(e) => setStartDate(e)}
        />

        <MobileDatePicker
          label="End Date"
          name="end-date"
          id="end-date"
          ampm
          // value={startDate}
          // onChange={(e) => setStartDate(e)}
        />
      </Box>

      <FormLabel className="mt-5">
        <Typography variant="h5" gutterBottom>
          Grade/Percentage
        </Typography>
      </FormLabel>

      <TextField
        required
        type="text"
        variant="outlined"
        size="small"
        label="Grade/Percentage"
        fullWidth
        autoComplete="given-name"
      />

      <button className="p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md ">
        Add More
      </button>

      <button
        type="submit"
        className="p-2 w-1/4 h-10 mt-20 bg-emerald-500 text-white rounded-md "
      >
        Submit
      </button>
    </Box>
  );
}
