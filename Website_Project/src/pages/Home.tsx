import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Card1 from "../components/Card1";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const Home: React.FC = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-176 bg-gray-300 p-8">
      <h1 className="text-4xl text-black font-bold mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-700">
        This is the main page of our website. Explore the features!
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
