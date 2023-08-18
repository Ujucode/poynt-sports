import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Select,
  InputLabel,
  MenuItem,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { state as statesData, played_upto } from "../../data/data";

const AchieveCertificate = () => {
  const getCurrentYear = new Date().getFullYear(); // current year
  const listOfYears = Array.from({ length: 30 }, (_, i) => getCurrentYear - i);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const event_type = [
    "Single Match",
    "League Tournament",
    "Knockout Tournament",
    "Mixed Tournament",
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Achievements & Certifications
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <TextField
            label="Event/Certificate Name"
            size="small"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Position" size="small" fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <InputLabel required>Event Type</InputLabel>
          <Select labelId="event_type" id="event" size="small" fullWidth>
            {event_type.map((type) => (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={7}>
          <InputLabel required>Level</InputLabel>
          <Select
            labelId="played-upto-label"
            id="played-upto"
            size="small"
            fullWidth
          >
            {played_upto.map((level) => (
              <MenuItem value={level} key={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={7}>
          <TextField label="Organised By" size="small" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Organised On (Month)</InputLabel>
          <Select
            labelId="played-from-month-label"
            id="played-from-month"
            size="small"
            fullWidth
          >
            {months.map((month) => (
              <MenuItem value={month} key={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={7}>
          <InputLabel required>Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            fullWidth
          >
            {listOfYears.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>State</InputLabel>
          <Select labelId="state-label" id="state" size="small" fullWidth>
            {statesData.map((state) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Country</InputLabel>
          <Select labelId="country-label" id="country" size="small" fullWidth>
            {/* {countries.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Button variant="outlined" size="small">
            Add New
          </Button>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Button variant="outlined" size="small">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AchieveCertificate;
