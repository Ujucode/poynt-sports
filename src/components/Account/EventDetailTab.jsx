import { Box } from "@mui/material";
import Countdown from "../UI/Countdown"
import { CalendarToday, AccessTime,Folder, LocationOn } from "@mui/icons-material";
const EventDetailTab = () => {
  return(
  <Box>
           <div className="flex gap-3 items-center mb-2"> 
        <CalendarToday />
        <span >Date: 28/8/23</span>
        <AccessTime />
        <span >Time: 21:40-22:40</span>
        <Folder />
        <span >Category: Training Camp</span>
        <LocationOn />
        <span >Location: Guwahati</span>
      </div> 

    <Countdown/>
  
    

  </Box>
  )

};

export default EventDetailTab;
