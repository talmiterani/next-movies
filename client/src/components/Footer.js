import {
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  CenterFocusStrong,
} from "@mui/icons-material";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
} from "@mui/material";
import favicon from "../assets/favicon.svg"

const Footer = () => (
  <>
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Grid container direction="column">
      <Grid pt={1} pb={1}>
        <img alt="favicon" src={favicon}/>
        </Grid>
        <Grid>
          <Typography variant="h5">Contact us</Typography>
        </Grid>
        <Grid>support@nextmovies.com</Grid>
        <Grid>Mon – Fri | 6:00am – 5:00 pm PT</Grid>
        <Grid>
          <BottomNavigation sx={{ backgroundColor: "black" }} pr={3}>
            <Box sx={{ width: 40, height: 40 }}>
              <BottomNavigationAction
                label="Twitter"
                icon={
                  <Twitter
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: 40, height: 40 }}>
              <BottomNavigationAction
                label="Facebook"
                icon={
                  <Facebook
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: 40, height: 40 }}>
              <BottomNavigationAction
                label="LinkedIn"
                icon={
                  <LinkedIn
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: 40, height: 40 }}>
              <BottomNavigationAction
                label="Instagram"
                icon={
                  <Instagram
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ width: 40, height: 40 }}>
              <BottomNavigationAction
                label="YouTube"
                icon={
                  <YouTube
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  />
                }
              />
            </Box>
          </BottomNavigation>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Footer;
