import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className=""
    >
      {value === index && <Box className="p-6 w-[1030px]">{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function MUIVerticalTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        my: 5,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Edit Profile" {...a11yProps(0)} to="" component={Link} />
        <Tab
          label="Add Skills"
          {...a11yProps(1)}
          to="add-skills"
          component={Link}
        />
        <Tab
          label="Education"
          {...a11yProps(2)}
          to="education"
          component={Link}
        />
        <Tab
          label="Playing Career"
          {...a11yProps(3)}
          to="playing-career"
          component={Link}
        />
        <Tab
          label="My Supports"
          {...a11yProps(4)}
          to="supports"
          component={Link}
        />
        <Tab
          label="Events Attended"
          {...a11yProps(5)}
          to="events-attended"
          component={Link}
        />
        <Tab
          label="Create Event"
          {...a11yProps(6)}
          to="create-event"
          component={Link}
        />
        <Tab
          label="Event Details"
          {...a11yProps(7)}
          to="event-details"
          component={Link}
        />

        <Tab
          label="Calender"
          {...a11yProps(8)}
          to="calender"
          component={Link}
        />
        <Tab
          label="Achievements and Certificates"
          {...a11yProps(9)}
          to="achievements-and-certificates"
          component={Link}
        />
        <Tab
          label="Participations"
          {...a11yProps(10)}
          to="participations"
          component={Link}
        />
        <Tab
          label="Bank Details"
          {...a11yProps(11)}
          to="bank-account"
          component={Link}
        />
        <Tab
          label="Sponsorship Details"
          {...a11yProps(12)}
          to="sponsorship"
          component={Link}
        />
        <Tab label="Posts" {...a11yProps(13)} to="posts" component={Link} />
      </Tabs>
      {Array.from(Array(14)).map((_, index) => (
        <TabPanel key={index} value={value} index={index}>
          {props.children}
        </TabPanel>
      ))}
    </Box>
  );
}

export default MUIVerticalTabs;
