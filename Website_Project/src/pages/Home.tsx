import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card1 from "../components/Card1";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "700px", // Equivalent to h-176 in Tailwind
        bgcolor: "grey.300", // Equivalent to bg-gray-300
        p: 4, // Equivalent to p-8
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2, // Equivalent to mb-4
          color: "text.primary",
        }}
      >
        Welcome to the Home Page
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4, // Equivalent to mb-4
        }}
      >
        This is the main page of our website. Explore the features!
      </Typography>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Card1 />
            </Item>
          </Grid>
          <Grid item xs={6} md={8}>
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
