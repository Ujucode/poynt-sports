import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  state as states,
  played_upto,
  assam_districts,
  DUMMY_SPORTS,
} from "../../data/data";

function MUIGroupSelect({ profession }) {
  return (
    <div className="my-16 grid grid-cols-3">
      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="grouped-select">Sport</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {DUMMY_SPORTS.map((sport) => (
            <MenuItem value={1} key={sport}>
              {sport}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="grouped-select">State</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {states.map((state) => (
            <MenuItem value={1} key={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="grouped-select">District</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {assam_districts.map((district) => (
            <MenuItem value={1} key={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="grouped-select">{profession} Upto</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {played_upto.map((level) => (
            <MenuItem value={1} key={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MUIGroupSelect;
