import { Toolbar, Typography, Container, Box } from "@mui/material";
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
        <Container maxWidth="sm">
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
        </Container>

        <MoviesList />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
