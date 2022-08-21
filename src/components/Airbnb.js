import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import { FaAirbnb } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Airbnb = () => {
  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 0.5 }}>
        <FaAirbnb size={30} color="red" />
        <Typography variant="h6" color="red" fontWeight="bold">
          airbnb
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            border: 1,
            borderRadius: 23,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
            p: 1,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            Anywhere
          </Typography>
          <Divider orientation="vertical" flexItem />

          <Typography variant="subtitle2" fontWeight="bold">
            Any week
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="subtitle2">Add guests</Typography>
          <Divider orientation="vertical" flexItem />
          <IoSearchCircleSharp size={30} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 3,
          mt: 2,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          Become a host
        </Typography>
        <Box sx={{ mt: 0.5 }}>
          <BsGlobe />
        </Box>
        <Box
          sx={{
            border: 1,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
            p: 1,
          }}
        >
          <FiMenu />
          <FaUser />
        </Box>
      </Box>
    </Container>
  );
};

export default Airbnb;
