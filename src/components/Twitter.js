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
      <Box border={1} sx={{ width: "450px", height: "450px", borderRadius: 3 }}>
        <Box
          sx={{
            pt: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "#42a5f5",
          }}
        >
          <FaTwitter size={25} />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              pt: 3,
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
                borderColor: "#bdbdbd",
                pt: 4,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#bdbdbd",
                  color: "black",
                  pl: 5,
                  pr: 5,
                  gap: 1,
                  borderRadius: 10,
                }}
              >
                <AiFillApple size={20} />
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ textTransform: "capitalize" }}
                >
                  Continue with Apple
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderColor: "#bdbdbd",
                borderRadius: 10,
                mt: 1,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#bdbdbd",
                  color: "black",
                  pl: 5,
                  pr: 5,
                  gap: 1,
                  borderRadius: 10,
                }}
              >
                <AiOutlineGoogle size={20} />
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ textTransform: "capitalize" }}
                >
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
                label="Phone, email, username"
                variant="outlined"
                sx={{ width: "15rem" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",

                borderRadius: 10,
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "black", pl: 14, pr: 14, borderRadius: 10 }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ textTransform: "capitalize" }}
                >
                  Next
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: 10,
                mt: 2,
                mb: 2,
              }}
            >
              <Button
                variant="outlined"
                sx={{ borderColor: "#bdbdbd", pl: 8, pr: 8, borderRadius: 10 }}
              >
                <Typography
                  color="black"
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ textTransform: "capitalize" }}
                >
                  Forgot password?
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Twitter;
