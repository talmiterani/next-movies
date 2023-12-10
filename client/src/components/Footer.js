import {
  Twitter,
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
  ListItem,
  List,
} from "@mui/material";
import favicon from "../assets/favicon.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: 2,
        }}
      >
        <Grid container alignItems="center" direction="column">
          <Grid itempt={1} pb={1}>
            <img alt="favicon" src={favicon} />
          </Grid>
          <Grid item>
            <Typography variant="h5">{t("contact_us")}</Typography>
          </Grid>
          <Grid item>
            <List>
              <ListItem
                style={{ color: "white" }}
                key="Email"
                component="a"
                href="mailto:support@nextmovies.com"
              >
                {t("email_support")}
              </ListItem>
            </List>
          </Grid>
          <Grid item>{t("opening_time")}</Grid>
          <Grid item>
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
};

export default Footer;
