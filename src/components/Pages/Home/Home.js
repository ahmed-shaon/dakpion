import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import bg from "../../../assets/bg.png";
import hero1 from "../../../assets/hero1.png";
import bg2 from "../../../assets/bg2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Grid container spacing={2} padding="30px">
        <Grid sx={{ padding: "30px" }} item lg={8}>
          <Typography variant="h1" sx={{ color: "tomato" }}>
            Dakpion <br /> <span color="red">Chat App</span>
          </Typography>
          <Typography variant="h3" sx={{ color: "black" }}>
            Your Desire Chat App <br /> To Connect The World
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Link to="login">
              <Button
                variant="contained"
                sx={{ marginRight: "20px", size: "larger" }}
              >
                Join
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" color="secondary" size="larger">
                Register
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          sx={{
            backgroundColor: "tomato",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "72% 24% 30% 31% / 32% 44% 47% 39% ",
            marginTop: "-28px",
          }}
        >
          <img src={hero1} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
