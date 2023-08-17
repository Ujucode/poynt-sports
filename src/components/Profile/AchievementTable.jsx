import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(position, competiton, level, organizer, month, year) {
  return { position, competiton, level, organizer, month, year };
}

const rows = [
  createData(
    "1ST",
    "UNDER 10 GIRLS SINGLES ASSAM STATE CHAMPION",
    "STATE",
    "ASSAM BADMINTON ASSOCIATION",
    "JANUARY",
    2011,
  ),
  createData(
    "2ND",
    "UNDER 10 GIRLS SINGLES ASSAM STATE CHAMPION",
    "STATE",
    "TEZPUR BADMINTON ASSOCIATION",
    "FEBRUARY",
    2011,
  ),
  createData(
    "2ND",
    "UNDER 10 GIRLS SINGLES ASSAM STATE CHAMPION",
    "STATE",
    "JORHAT BADMINTON ASSOCIATION",
    "FEBRUARY",
    2011,
  ),
  createData(
    "RUNNERS UP",
    "UNDER 10 GIRLS SINGLES ASSAM STATE CHAMPION",
    "ZONAL",
    "DULIAJAN BADMINTON ASSOCIATION",
    "MARCH",
    2011,
  ),
  createData(
    "RUNNERS UP",
    "UNDER 13 GIRLS SINGLES ASSAM STATE CHAMPION",
    "STATE",
    "DON BOSCO SCHOOL,GUWAHATI",
    "JANUARY",
    2015,
  ),
  createData(
    "WINNER",
    "UNDER 13 GIRLS DOUBLES ASSAM STATE CHAMPION",
    "STATE",
    "TEZPUR BADMINTON ASSOCIATION",
    "FEBRUARY",
    2015,
  ),
  createData(
    "WINNER",
    "UNDER 13 GIRLS DOUBLES ASSAM STATE CHAMPION",
    "STATE",
    "SIVSAGAR BADMINTON ASSOCIATION",
    "FEBRUARY",
    2015,
  ),
  createData(
    "9TH",
    "INDIA UNDER 13 GIRLS SINGLES",
    "NATIONAL",
    "INDIAN BADMINTON ASSOCIATION",
    "DECEMBER",
    2015,
  ),
  createData(
    "CHAMPION",
    "UNDER 15 GIRLS SINGLES ASSAM STATE",
    "STATE",
    "GOLAGHAT BADMINTON ASSOCIATION",
    "JANUARY",
    2016,
  ),
  createData(
    "1ST",
    "UNDER 15 GIRLS DOUBLES ASSAM STATE CHAMPION",
    "STATE",
    "GOLAGHAT BADMINTON ASSOCIATION",
    "JANUARY",
    2016,
  ),
];
export default function AchieveTable() {
  return (
    <TableContainer component={Paper}>
      <div className="text-center text-2xl font-bold pt-4"> Achievements </div>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="Achievements"
        className="w-full"
      >
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell align="right">Competiton</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Organizer</TableCell>
            <TableCell align="right">Month</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`${row.position}-${index}`} // Unique key with position and index
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="block md:table-row" // Display as block on small screens, table-row on larger screens
            >
              <TableCell
                component="th"
                scope="row"
                className="md:table-cell" // Display as table-cell on larger screens
              >
                {row.position}
              </TableCell>
              <TableCell align="right">{row.competiton}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right">{row.organizer}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}