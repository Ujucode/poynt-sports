
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormLabel,Select, MenuItem, InputLabel } from '@mui/material';
import { Button } from '@mui/material';
// import { useState } from "react";
// import Select from '@mui/material/Select';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';


const options = [
    { label: "Under 10th", value: "under 10th" },
    { label: "10+",  value: "10+" },
    { label: "12+", value: "12+" },
    { label: "Graduate", value: "graduate" },
    { label: "Master", value: "master" },
    { label: "PhD", value: "phd" },
  ];

export default function EduForm() {
    // const [fruit, setFruit] = useState("apple");
  return (
   <div>
      <Typography variant="h6" gutterBottom>
        Education Qualification
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            type="text" 
            variant='outlined' 
            size="small"
            label="Institute name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
     
        <Grid item xs={7}>
        <InputLabel required>Degree</InputLabel>
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
        </Grid>
        <Grid item xs={7}>
        <TextField
            required
            type="text" 
            variant='outlined' 
            size="small"
            label="Field Of Study"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormLabel required>
            Start Date</FormLabel>
        <TextField 
        size="small"
            type="date"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormLabel required>
            End Date</FormLabel>
        <TextField 
        size="small"
            type="date"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
        <TextField
            required
            type="text" 
            variant='outlined' 
            size="small"
            label="Grade/Percentage"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
        <Button
        variant='outlined'
        size="small"
        >Add More</Button>
        </Grid>
        <Grid item xs={12} sm={7}>
        <Button
        variant='outlined'
        size="small"
        >Submit</Button>
        </Grid>
      
      </Grid>
      </div>
  );
}