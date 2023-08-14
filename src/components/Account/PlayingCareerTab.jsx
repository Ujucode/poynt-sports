import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Select, InputLabel, MenuItem, Button, TextField } from "@mui/material";
import {
  state as statesData,
  assam_districts as assamDistricts,
  played_upto,
} from "../../data/data";

const PlayingCareerTab = () => {
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

  const countries = ["India", "USA", "UK" /* Other countries */];
  //   Try using Box
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Playing Career
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <InputLabel required>Played Upto Level</InputLabel>
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
          <InputLabel required>Played From (year)</InputLabel>
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
        <Grid item xs={7}>
          <InputLabel required>Played To (year)</InputLabel>
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
        <Grid item xs={7}>
          <Typography variant="h9" gutterBottom>
            Playing Career (Current)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Team, Club, Institution Name" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Organisation Type</InputLabel>
          <Select
            labelId="organisation-type-label"
            id="organisation-type"
            size="small"
            fullWidth
          >
            <MenuItem value="Team">Team</MenuItem>
            <MenuItem value="Club">Club</MenuItem>
            <MenuItem value="Institution">Institution</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Played From (Month)</InputLabel>
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
        <Grid item xs={12} sm={6}>
          <InputLabel required>Played From (Year)</InputLabel>
          <Select
            labelId="played-from-year-label"
            id="played-from-year"
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
        <Grid item xs={12}>
          <TextField label="Address Line" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City/Town/Village" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Assam District</InputLabel>
          <Select
            labelId="assam-district-label"
            id="assam-district"
            size="small"
            fullWidth
          >
            {assamDistricts.map((district) => (
              <MenuItem value={district} key={district}>
                {district}
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
            {countries.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Contact Number" fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Club/Team/Player Profile URL" fullWidth />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Button variant="outlined" size="small">
            Add New
          </Button>
        </Grid>

        <Grid item xs={7}>
          <Typography variant="h9" gutterBottom>
            Playing Career (Previous)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Team, Club, Institution Name"
            size="small"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Organisation Type</InputLabel>
          <Select
            labelId="organisation-type-label"
            id="organisation-type"
            size="small"
            fullWidth
          >
            <MenuItem value="Team">Team</MenuItem>
            <MenuItem value="Club">Club</MenuItem>
            <MenuItem value="Institution">Institution</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Played From (Month)</InputLabel>
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
        <Grid item xs={12} sm={6}>
          <InputLabel required>Played From (Year)</InputLabel>
          <Select
            labelId="played-from-year-label"
            id="played-from-year"
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
        <Grid item xs={12}>
          <TextField label="Address Line" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City/Town/Village" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel required>Assam District</InputLabel>
          <Select
            labelId="assam-district-label"
            id="assam-district"
            size="small"
            fullWidth
          >
            {assamDistricts.map((district) => (
              <MenuItem value={district} key={district}>
                {district}
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
            {countries.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Contact Number" fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Club/Team/Player Profile URL" fullWidth />
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
    </div>
  );
};

export default PlayingCareerTab;
