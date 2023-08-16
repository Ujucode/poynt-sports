import {
  TextField,
  Box,
  Typography,
  FormLabel,
  FormGroup,
} from "@mui/material";

const BankAccount = () => {
  return (
    <Box className="w-full flex flex-col gap-6 ">
      <FormLabel>
        <Typography variant="h4" gutterBottom>
          Bank Account Details
        </Typography>
      </FormLabel>

      <FormGroup>
        <FormLabel>
          <Typography variant="h6">UPI ID</Typography>
        </FormLabel>
        <TextField label="UPI ID" size="small" />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <Typography variant="h6">Account Holder Name</Typography>
        </FormLabel>
        <TextField label=" Account Holder Name" size="small" />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <Typography variant="h6">Account Number</Typography>
        </FormLabel>
        <TextField label="Account Number" size="small" />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <Typography variant="h6">Bank Name</Typography>
        </FormLabel>
        <TextField label="Bank Name" size="small" />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <Typography variant="h6">Branch Name</Typography>
        </FormLabel>
        <TextField label="Branch Name" size="small" />
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <Typography variant="h6">IFSC Code</Typography>
        </FormLabel>
        <TextField label="IFSC Code" size="small" />
      </FormGroup>

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
};

export default BankAccount;
