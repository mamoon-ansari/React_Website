import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Card1() {
  return (
    <Box sx={{ maxWidth: 360, boxShadow: 3 }}>
      <Card>
        {/* Top Image */}
        <CardMedia
          component="img"
          height="180"
          image="/assets/infrastructure.jpg" // put your image path here
          alt="Infrastructure Works"
        />

        {/* Orange content section */}
        <CardContent
          sx={{
            backgroundColor: "#f59b1b", // orange from image
            color: "#000",
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Infrastructure Works
          </Typography>

          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Water Networks
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Irrigation Networks
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Storm Water Networks
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Sewerage Networks
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Drainage Network
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Fire Hydrant / Fire Fighting Networks
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            GRE, GRPE, HDPE, UPVC Pipe Works
          </Typography>

          <Link
            href="#"
            underline="none"
            sx={{
              fontWeight: "bold",
              color: "#000",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Read More →
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}
