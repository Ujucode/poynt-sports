import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormLabel, Select, MenuItem, Box, Divider } from "@mui/material";

import { MobileDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

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
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [count, setCount] = useState(0);
  const [education, setEducation] = useState([]);

  // const [education, setEducation] = useState([
  //   {
  //     id: 0,
  //     university: "",
  //     degree: "",
  //     fieldOfStudy: "",
  //     startDate: "",
  //     endDate: "",
  //     gradeOrPercentage: "",
  //   },
  // ]);

  const handleAddMore = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleSave = (e, index) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target.form));

    const data = {
      ...formData,
      id: `education-details-${index}`, //temporary id
      startDate: new Date(startDate).toLocaleDateString(),
      endDate: new Date(endDate).toLocaleDateString(),
    };

    // if (data.id === education[education.length - 1]?.id) {
    //   return;
    // }

    setEducation([...education, data]);
  };

  const handleUpdate = (e, index) => {
    e.preventDefault();

    //newly added data
    const editedFormData = Object.fromEntries(new FormData(e.target.form));

    //previous data
    const prevData = education[index];

    //updated data
    const educationItem = {
      ...prevData,
      ...editedFormData,
    };
    console.log("update::", educationItem);

    education[index] = educationItem;

    console.log(education);

    const newEducation = [...education];

    // newEducation[index] = educationItem;
    setEducation(newEducation);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);

    // const data = Object.fromEntries(formData);

    console.log(education);

    // setEducation([
    //   ...education,
    //   {
    //     ...data,
    //     // degree: degree,
    //     id: education[education.length - 1].id + 1,
    //     startDate: new Date(startDate).toLocaleDateString(),
    //     endDate: new Date(endDate).toLocaleDateString(),
    //   },
    // ]);
  };

  console.log("education::", education);

  return (
    <Box
      className="w-full flex flex-col gap-2 "
      component={"form"}
      onSubmit={handleFormSubmit}
    >
      <FormLabel>
        <Typography variant="h3" gutterBottom>
          Education Qualification
        </Typography>
      </FormLabel>

      {Array.from(Array(count)).map((item, index) => (
        <Box className="w-full flex flex-col gap-2 mt-10" key={index}>
          <FormLabel>
            <Typography variant="h5" gutterBottom>
              University Name
            </Typography>
          </FormLabel>

          <TextField
            name="university"
            type="text"
            variant="outlined"
            size="small"
            label="University Name"
            fullWidth
            autoComplete="given-name"
          />

          <FormLabel className="mt-5">
            <Typography variant="h5" gutterBottom>
              Degree
            </Typography>
          </FormLabel>

          <Select
            name="degree"
            labelId="degree-select"
            id="degree-select"
            size="small"
            fullWidth

            // onChange={(e) => setDegree(e.target.value)}
          >
            {options.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>

          <FormLabel className="mt-5">
            <Typography variant="h5" gutterBottom>
              Field of Study
            </Typography>
          </FormLabel>

          <TextField
            name="field"
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
              value={startDate}
              onChange={(e) => setStartDate(e)}
            />

            <MobileDatePicker
              label="End Date"
              name="end-date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e)}
            />
          </Box>

          <FormLabel className="mt-5">
            <Typography variant="h5" gutterBottom>
              Grade/Percentage
            </Typography>
          </FormLabel>

          <TextField
            name="grade"
            type="text"
            variant="outlined"
            size="small"
            label="Grade/Percentage"
            fullWidth
            autoComplete="given-name"
          />
          <Box className="flex items-center mt-2 gap-2 w-min ">
            {!education[index] ? (
              <button
                id={`save-btn-${index}`}
                type="button"
                className="p-2 w-[5rem] h-10 bg-emerald-500 text-white rounded-md "
                onClick={(e) => handleSave(e, index)}
              >
                Save
              </button>
            ) : (
              <button
                id={`update-btn-${index}`}
                type="button"
                className="p-2 w-[5rem] h-10 bg-emerald-500 text-white rounded-md "
                onClick={(e) => handleUpdate(e, index)}
              >
                Update
              </button>
            )}
          </Box>

          <Divider className="my-10" />
        </Box>
      ))}

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
        />

        <MobileDatePicker label="End Date" name="end-date" id="end-date" />
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

      <button
        type="button"
        className="p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md "
        onClick={handleAddMore}
      >
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
