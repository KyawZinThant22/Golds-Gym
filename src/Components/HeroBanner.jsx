import { Box, Button, Typography } from "@mui/material";
import React from "react";

import Hero from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#Ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mt="30px"
        mb="23px"
      >
        Sweat , smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button href="#exercises" color="error" variant="contained"  sx={{backgroundColor:"#ff2625" , padding: "10px"}}>
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        mt="2rem"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={Hero} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
