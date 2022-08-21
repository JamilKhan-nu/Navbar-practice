import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Udemy = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, pr: 3 }}>
            <Typography variant="h5">udemy</Typography>
            <Typography variant="subtitle2" sx={{ pt: 1 }}>
              Catagory
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              border: 1,
              borderRadius: 23,
              width: "40%",
            }}
          >
            <IconButton sx={{ p: 1 }}>
              <SearchIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Typography sx={{ p: 1 }}> Search for anything</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <Typography variant="subtitle2">Udemy Business</Typography>

            <Typography variant="subtitle2">Teach on Udemy</Typography>
            <Typography variant="subtitle2">My learning</Typography>
          </Box>
          <Box>
            <IconButton sx={{ color: "#fff", gap: 2 }}>
              <FavoriteIcon />
              <AddShoppingCartIcon />
              <NotificationsIcon />
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Udemy;
