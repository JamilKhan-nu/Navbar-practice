import { Box, OutlinedInput, Typography, Avatar } from "@mui/material";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsPlus } from "react-icons/bs";

const Github = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 2,
            mt: 2,
            ml: 4,
            pb: 1,
          }}
        >
          <BsGithub size={30} />
          <OutlinedInput
            sx={{ border: 1, borderColor: "#fff", color: "#fff", height: 25 }}
            placeholder="Search or jump to..."
          />
          <Typography> Pull request</Typography>
          <Typography> Issues</Typography>
          <Typography> Marketplace</Typography>
          <Typography> Explore</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 2,
            mt: 2,
            mr: 4,
          }}
        >
          <MdOutlineNotificationsNone />
          <BsPlus />
          <Avatar sx={{ height: 20, width: 20, bgcolor: "#fff" }}>JK</Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Github;
