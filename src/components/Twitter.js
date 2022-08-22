import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import React from "react";
// import { MdClear } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";

const Twitter = () => {
  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box border={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FaTwitter size={30} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Sign in to Twitter
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              borderRadius: 10,
              mt: 2,
            }}
          >
            <Button variant="outlined" sx={{ gap: 1, borderRadius: 10 }}>
              <AiFillApple size={20} />
              <Typography sx={{ textTransform: "capitalize" }}>
                Continue with Apple
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              borderRadius: 10,
              mt: 1,
            }}
          >
            <Button variant="outlined" sx={{ gap: 1, borderRadius: 10 }}>
              <AiOutlineGoogle size={20} />
              <Typography sx={{ textTransform: "capitalize" }}>
                Continue with Google
              </Typography>
            </Button>
          </Box>
          <Divider>or</Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              borderRadius: 10,
              mt: 1,
            }}
          >
            <Button variant="contained" sx={{ borderRadius: 10 }}>
              <Typography sx={{ textTransform: "capitalize" }}>Next</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              borderRadius: 10,
              mt: 1,
              mb: 2,
            }}
          >
            <Button variant="outlined" sx={{ borderRadius: 10 }}>
              <Typography sx={{ textTransform: "capitalize" }}>
                Forgot password?
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Twitter;
