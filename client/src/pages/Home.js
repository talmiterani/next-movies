import { Toolbar, Typography, Container, Box, Grid } from "@mui/material";
import Logo from "../components/Logo";
import MoviesList from "../components/MoviesList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Toolbar>
        <Logo />
      </Toolbar>
      <Box sx={{ backgroundColor: "#00d7ff" }}>
        <Container maxWidth="md">
          <Grid container>
            <Grid pt={6} pb={5}>
              <Typography
                variant="h2"
                sx={{
                  backgroundColor: "#00d7ff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                EXPLORE YOUR NEXT MOVIES AND TV SHOWS
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <MoviesList />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
