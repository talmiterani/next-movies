import React from "react";
import logo from "../assets/Logo2.png";
import { Container } from "@mui/material";

const Logo = () => (
  <Container maxWidth="lg">
    <a href="/">
      <img src={logo} alt="logo" />
    </a>
  </Container>
);

export default Logo;
