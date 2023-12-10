import { Box, Container, Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4">{t("page_not_found")}</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
