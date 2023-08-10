
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, TextField , Box} from '@mui/material';


const Sponsorship = () => {
    
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Achievements & Certifications
      </Typography>
      <Grid container spacing={4}>
      <Grid item xs={7}>
          <TextField label="Sponsor Name" size='small' fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Sponsor Website" size='small' fullWidth required />
        </Grid>
        <Grid item xs={7}>
        <TextField
        id="date"
        size='small'
        label="Date of sponsorship"
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
      />

        </Grid>
        <Grid item xs={7}>
          <TextField label="Sponsor Amount" size='small' fullWidth required />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Button variant="outlined" size="small">
            Add New
          </Button>
        </Grid>
        <Grid item xs={7}>
        <Typography variant="h9" gutterBottom>
        Previous Sponsor
      </Typography>
      </Grid>
      <Grid item xs={7}>
          <TextField label="Sponsor Name" size='small' fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Sponsor Website" size='small' fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Sponsor Amount" size='small' fullWidth required />
        </Grid>
        <Grid item xs={7}>
        <TextField
        id="date"
        size='small'
        label="Sponsorship from (Date)"
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
      />

        </Grid>
        <Grid item xs={7}>
        <TextField
        id="date"
        size='small'
        label="Sponsorship to (Date)"
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
      />

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

export default Sponsorship;