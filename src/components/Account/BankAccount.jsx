import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, TextField, Box } from "@mui/material";

const BankAccount = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Bank Account Details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <TextField label="UPI ID" size="small" fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField
            label=" Account Holder Name"
            size="small"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Account Number" size="small" fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Bank Name" size="small" fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Branch Name" size="small" fullWidth required />
        </Grid>
        <Grid item xs={7}>
          <TextField label="IFSC Code" size="small" fullWidth required />
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

export default BankAccount;
