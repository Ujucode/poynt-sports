import Avatar from "@mui/material/Avatar";
import Button from "../UI/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <div className=" flex flex-col items-center ">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <p className="text-3xl text-[rgb(0,0,0,)]  mb-2">Sign Up</p>
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Subscribe to newsletter."
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid xs={12}>
            <Button className=" p-2 mt-3 mb-2 rounded-lg #00AB55 white bg-green-400 items-center">
              Sign Up
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid xs={12}>
            Already have an account?{" "}
            <Link href="#" variant="body2">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
      <Copyright sx={{ mt: 5 }} />
    </div>
  );
}

export default SignUpForm;
