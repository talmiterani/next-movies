import {
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

const Footer = () => (
  <>
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: 2,
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <BottomNavigation showLabels sx={{ backgroundColor: "black" }}>
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
    </Box>
  </>
);

export default Footer;
