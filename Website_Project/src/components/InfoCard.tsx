import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface InfoCardProps {
  title: string;
  image: string;
  items: string[];
  link: string;
  shade?: string; // optional, fallback to orange
}

export default function InfoCard({ title, image, items, link, shade }: InfoCardProps) {
  return (
    <Box sx={{ maxWidth: 360, boxShadow: 3 }}>
      <Card sx={{ height: 500, display: "flex", flexDirection: "column" }}>
        {/* Top Image */}
        <CardMedia component="img" height="180" image={image} alt={title} />

        {/* Orange Section */}
        <CardContent
          sx={{
            backgroundColor: shade || "#f59b1b", // Dynamic shade
            color: "#000",
            p: 3,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {title}
          </Typography>

          <Box>
            {items.map((item, idx) => (
              <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Box>
            <Link
              href={link}
              underline="none"
              sx={{
                fontWeight: "bold",
                color: "#000",
                display: "inline-flex",
                alignItems: "center",
                mt: 1,
              }}
            >
              Read More →
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
