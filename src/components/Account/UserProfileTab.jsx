import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import fallbackImg from "../../assets/fallback-profile-img.png";
import { quillModules, quillFormats } from "../UI/TextEditorConfig";
import ReactQuill from "react-quill";
import { MobileDatePicker } from "@mui/x-date-pickers";

const UserProfileTab = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState();
  const [content, setContent] = useState("");
  const uploadRef = useRef();
  const [genderRadioValue, setGenderRadioValue] = useState("");

  const handleGenderRadioChange = (event) => {
    setGenderRadioValue(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    uploadRef.current.click();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const [addressChecked, setAddressChecked] = useState(true);

  const handleAddressCheckboxChange = (event) => {
    setAddressChecked(event.target.checked);
  };

  const handleSave = (e) => {
    // Here you can save the content to your backend or do any other necessary actions
    e.preventDefault();
    console.log(content);
  };

  return (
    <>
      <Box className="flex flex-col gap-10  " component={"form"}>
        <FormControl className="flex gap-2">
          <input
            ref={uploadRef}
            type="file"
            accept="image/*,.png,.jpg"
            hidden
            name="event-image"
            onChange={handleImageChange}
          />

          <Paper variant="outlined" className=" p-5 w-2/6 ">
            <img
              src={image || fallbackImg}
              alt="event img"
              className="object-contain object-center mx-auto "
            />
          </Paper>

          <button
            id="upload-img"
            className="p-2 w-40  bg-emerald-500 text-white rounded-md h-10"
            onClick={handleUpload}
          >
            {image ? "Change Image" : "Upload Event Image"}
          </button>

          <FormLabel htmlFor="upload-img" required>
            Max size 5 MB
          </FormLabel>
        </FormControl>

        <FormControl>
          <FormLabel>Add Bio</FormLabel>
          <ReactQuill
            placeholder="Tell us about yourself..."
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            name="post"
          />
          <button
            onClick={handleSave}
            className="p-2 w-[5rem] h-10 mt-2 bg-emerald-500 text-white rounded-md "
          >
            Save
          </button>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="firstname">
            <Typography>First Name</Typography>
          </FormLabel>
          <TextField
            name="firstname"
            id="firstname"
            label="John"
            className=""
          />
        </FormControl>

        <FormControl>
          <FormLabel>
            <Typography>Last Name</Typography>
          </FormLabel>
          <TextField label="Doe" name="lastname" id="lastname" />
        </FormControl>

        <FormControl>
          <FormLabel>
            <Typography>Email</Typography>
          </FormLabel>
          <TextField label="john_doe@gmail.com" name="email" id="email" />
        </FormControl>

        <FormGroup>
          <FormLabel>
            <Typography>Password</Typography>
          </FormLabel>

          <FormControl>
            <InputLabel htmlFor="password">Min. 8 characters</InputLabel>

            <OutlinedInput
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Min. 8 characters"
            />
          </FormControl>
        </FormGroup>

        <FormControl>
          <FormLabel>
            <Typography>Confirm Password</Typography>
          </FormLabel>

          <TextField
            name="confirm-password"
            id="confirm-password"
            label="Confirm Password"
          />
        </FormControl>

        <button
          type="submit"
          className="p-2 w-1/4 h-10  bg-emerald-500 text-white rounded-md "
        >
          Submit
        </button>
      </Box>

      <Divider className="my-20" />

      <Box className="flex flex-col gap-10  " component={"form"}>
        <FormControl>
          <FormLabel htmlFor="main-sport">
            <Typography>Main Sport</Typography>
          </FormLabel>
          <TextField
            name="main-sport"
            id="main-sport"
            placeholder="Eg. Badminton"
          />
        </FormControl>

        <FormControl>
          <FormLabel id="gender-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender-group"
            defaultValue=""
            name="controlled-radio-gender-group"
            value={genderRadioValue}
            onChange={handleGenderRadioChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>
            <Typography>Languages Known</Typography>
          </FormLabel>
          <TextField
            name="languages"
            id="languages"
            placeholder="Eg. English, Assamese"
          />
        </FormControl>

        <FormControl>
          <FormLabel>
            <Typography>Blood Group</Typography>
          </FormLabel>
          <TextField name="blood-group" id="blood-group" placeholder="Eg. O+" />
        </FormControl>

        <Box className="flex gap-2 w-min">
          <FormControl sx={{ width: "15rem" }}>
            <FormLabel>
              <Typography>Weight</Typography>
            </FormLabel>
            <OutlinedInput
              placeholder="Eg. 60"
              id="weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            {/* <FormHelperText id="weight-helper-text">
            Weight
          </FormHelperText> */}
          </FormControl>

          <FormControl sx={{ width: "15rem" }} variant="outlined">
            <FormLabel>
              <Typography>Height</Typography>
            </FormLabel>
            <OutlinedInput
              placeholder="Eg. 1.7"
              id="height"
              endAdornment={
                <InputAdornment position="end">meters</InputAdornment>
              }
              aria-describedby="height-helper-text"
              inputProps={{
                "aria-label": "height",
              }}
            />
            {/* <FormHelperText id="outlined-weight-helper-text">
            Height
          </FormHelperText> */}
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>
            <Typography>Date of Birth</Typography>
          </FormLabel>
          <MobileDatePicker
            sx={{ width: "15rem" }}
            name="date-of-birth"
            id="date-of-birth"
          />
        </FormControl>

        <FormControl>
          <FormLabel>
            <Typography>Other Sports</Typography>
          </FormLabel>
          <TextField
            name="other-sports"
            id="other-sports"
            placeholder="Eg. Cricket, Football, Table Tenis..."
          />
          <FormHelperText className="m-0">
            Enter name of sports separated by commas.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>
            <Typography>Skills</Typography>
          </FormLabel>
          <TextField
            name="skills"
            id="skills"
            placeholder="Eg. Time Management, Leadership, Event Management..."
          />
          <FormHelperText className="m-0">
            Enter skills separated by commas.
          </FormHelperText>
        </FormControl>

        <button
          type="submit"
          className="p-2 w-1/4 h-10  bg-emerald-500 text-white rounded-md "
        >
          Submit
        </button>
      </Box>

      <Divider className="my-20" />

      <Box className="flex justify-between gap-10  " component={"form"}>
        <Box className="flex flex-col gap-5 w-1/2 ">
          <FormLabel>
            <Typography variant="h5" gutterBottom>
              CURRENT ADDRESS
            </Typography>
          </FormLabel>

          <FormControl>
            <FormLabel>
              <Typography>Address</Typography>
            </FormLabel>
            <TextField
              name="address"
              id="address"
              placeholder="Eg. 504 Tulsiani Chambers, Yogakshema (nariman Point)"
            />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>District</Typography>
            </FormLabel>
            <TextField name="district" id="district" placeholder="Eg. Mumbai" />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>City</Typography>
            </FormLabel>
            <TextField name="city" id="city" placeholder="Eg. Mumbai" />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>State</Typography>
            </FormLabel>
            <TextField name="state" id="state" placeholder="Eg. Maharastra" />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>Country</Typography>
            </FormLabel>
            <TextField name="country" id="country" placeholder="Eg. India" />
          </FormControl>

          <FormGroup>
            <FormControlLabel
              sx={{ color: "rgba(0, 0, 0, 0.6)" }}
              control={
                <Checkbox
                  checked={addressChecked}
                  onChange={handleAddressCheckboxChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Check if current address and permanent address are same."
            />
          </FormGroup>

          <button className="p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md ">
            Add More
          </button>
        </Box>

        <Box className="flex flex-col gap-5 w-1/2 ">
          <FormLabel>
            <Typography variant="h5" gutterBottom>
              PERMANENT ADDRESS
            </Typography>
          </FormLabel>

          <FormControl>
            <FormLabel>
              <Typography>Address</Typography>
            </FormLabel>
            <TextField
              name="address"
              id="address"
              placeholder="Eg. 504 Tulsiani Chambers, Yogakshema (nariman Point)"
            />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>District</Typography>
            </FormLabel>
            <TextField name="district" id="district" placeholder="Eg. Mumbai" />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>City</Typography>
            </FormLabel>
            <TextField name="city" id="city" placeholder="Eg. Mumbai" />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>State</Typography>
            </FormLabel>
            <TextField name="state" id="state" placeholder="Eg. Maharastra" />
          </FormControl>

          <FormControl>
            <FormLabel>
              <Typography>Country</Typography>
            </FormLabel>
            <TextField name="country" id="country" placeholder="Eg. India" />
          </FormControl>

          <button className="p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md">
            Add More
          </button>
        </Box>
      </Box>
    </>
  );
};

export default UserProfileTab;
