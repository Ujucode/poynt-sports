import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import AthleteCard from "./AthleteCard";

const AthletesGallery = () => {
  return (
    <section className="my-20">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(15)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <AthleteCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default AthletesGallery;
