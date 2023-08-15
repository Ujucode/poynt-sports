import Typography from "@mui/material/Typography";
import { Select, FormLabel, InputLabel, MenuItem, TextField , Box} from "@mui/material";
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data= Object.fromEntries(formData);
    console.log({
      ...data,
      id: new Date().getTime(),
    
  })
  }
  return (
    <Box
    className="w-full flex flex-col gap-5"
    component={"form"}
    onSubmit={handleFormSubmit}
    >
      <FormLabel>
      <Typography variant="h6" gutterBottom>
        Playing Career
      </Typography>
      </FormLabel>
     
      <FormLabel>
      <Typography variant="h6" gutterBottom>
        Played upto level
      </Typography>
      </FormLabel>
          <Select
          name="played-upto-level"
            labelId="played-upto-level-label"
            id="played-upto-level"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {played_upto.map((level) => (
              <MenuItem value={level} key={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
       
      
          <FormLabel>
      <Typography variant="h6" gutterBottom>
        Played From (Year)
      </Typography>
      </FormLabel>
          <Select
          name="played-from-year"
            labelId="played-from-year-label"
            id="played-from-year"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {listOfYears.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
       
      
          <FormLabel>
      <Typography variant="h6" gutterBottom>
        Played To (Year)
      </Typography>
      </FormLabel>
          <Select
          name="played-to-year"
            labelId="played-to-year-label"
            id="played-to-year"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {listOfYears.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
       
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Playing Career (Current)
          </Typography>
          </FormLabel>
    
          <TextField label="Team, Club, Institution Name" fullWidth 
          name="team-club-institute-name" />
      
      <FormLabel>
          <Typography variant="h9" gutterBottom>
           Organisation Type
          </Typography>
          </FormLabel>
          <Select
          name="organisation-type"
            labelId="organisation-type-label"
            id="organisation-type"
            size="small"
            fullWidth
            defaultValue="" 
          >
            <MenuItem value="Team">Team</MenuItem>
            <MenuItem value="Club">Club</MenuItem>
            <MenuItem value="Institution">Institution</MenuItem>
          </Select>
       
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Played From (Month)
          </Typography>
          </FormLabel>
          <Select
          name="played-from-month"
            labelId="played-from-month-label"
            id="played-from-month"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {months.map((month) => (
              <MenuItem value={month} key={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
     
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Played Fron (Year)
          </Typography>
          </FormLabel>
          <Select
          name="played-from-year-org"
            labelId="played-from-year-org-label"
            id="played-from-year-org"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {listOfYears.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
      
          <TextField label="Address Line" fullWidth  
          name="address-line"/>
    
          <TextField label="City/Town/Village" fullWidth 
          name="city-town-village" />
       
       <FormLabel>
          <Typography variant="h9" gutterBottom>
            Assam District
          </Typography>
          </FormLabel>
          <Select
          name="assam-district"
            labelId="assam-district-label"
            id="assam-district"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {assamDistricts.map((district) => (
              <MenuItem value={district} key={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
       
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            State
          </Typography>
          </FormLabel>
          <Select 
          name="state"
          labelId="state-label" 
          id="state" 
          size="small" 
          fullWidth
          defaultValue="" 
          >
            {statesData.map((state) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
  
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Country
          </Typography>
          </FormLabel>
          <Select 
          name="country"
          labelId="country-label"
           id="country"
            size="small" 
            fullWidth
            defaultValue="" 
            >
            {countries.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
    
          <TextField label="Contact Number" fullWidth  
          name="contact"/>
       
          <TextField label="Club/Team/Player Profile URL" fullWidth
          name="club-team-player-profile-url" />
       
       <button className="p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md ">
        Add More
      </button>
     
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Playing Career (Previous)
          </Typography>
          </FormLabel>
      
         
          <TextField label="Team/Club/Institution Name" fullWidth
          name="team-club-institution-name-previous"/>
       
       <FormLabel>
          <Typography variant="h9" gutterBottom>
            Organisation Type
          </Typography>
          </FormLabel>
          <Select
           name="organisation-type-previous"
           labelId="organisation-type-previous-label"
           id="organisation-type-previous"
           size="small"
           fullWidth
           defaultValue="" 
          >
            <MenuItem value="Team">Team</MenuItem>
            <MenuItem value="Club">Club</MenuItem>
            <MenuItem value="Institution">Institution</MenuItem>
          </Select>
       
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Played From (Month)
          </Typography>
          </FormLabel>
          <Select
          name="played-from-month-previous"
            labelId="played-from-month-previous-label"
            id="played-from-month-previous"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {months.map((month) => (
              <MenuItem value={month} key={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
    
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Played From (Year)
          </Typography>
          </FormLabel>
          <Select
          name="played-from-year-previous"
            labelId="played-from-year-previous-label"
            id="played-from-year-previous"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {listOfYears.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
     
          <TextField label="Address Line" fullWidth
          name="address-previous"/>
      
          <TextField label="City/Town/Village" fullWidth 
          name="city-town-village-previous" />
      
          <InputLabel >Assam District</InputLabel>
          <Select
          name="assam-district-previous"
            labelId="assam-district-previous-label"
            id="assam-district-previous"
            size="small"
            fullWidth
            defaultValue="" 
          >
            {assamDistricts.map((district) => (
              <MenuItem value={district} key={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
   
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            State
          </Typography>
          </FormLabel>
          <Select 
          name="state-previous"
          labelId="state-previous-label" 
          id="state-previous" 
          size="small" 
          fullWidth
          defaultValue="" 
          >
            {statesData.map((state) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
       
          <FormLabel>
          <Typography variant="h9" gutterBottom>
            Country
          </Typography>
          </FormLabel>
          <Select 
          name="country-previous"
          labelId="country-previous-label" 
          id="country-previous" 
          size="small" 
          fullWidth
          defaultValue="" 
          >
            {countries.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
     
          <TextField label="Contact Number" fullWidth 
          name="contact-number-previous" />
     
          <TextField label="Club/Team/Player Profile URL" fullWidth
          name="club-team-player-profile-url-previous" />
  
          <button className="p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md ">
        Add More
      </button>
        
          <button 
          type="submit"
          className="p-2 w-1/4 h-10 mt-20 bg-emerald-500 text-white rounded-md"
          size="small">
            Submit
          </button>
      
    </Box>
  );
};


export default PlayingCareerTab;
