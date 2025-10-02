import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  TextField, 
  Button,
  Container,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";
import { supabaseAdmin } from "../../lib/supabase";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert into Supabase database
      const { error } = await supabaseAdmin
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            submitted_at: new Date().toISOString(),
            status: 'new'
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      // Send email notification (you can use Supabase Edge Functions for this)
      // await sendEmailNotification(formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Thank you for your message! We'll get back to you soon.",
        severity: "success"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbar({
        open: true,
        message: "Sorry, there was an error sending your message. Please try again.",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  // const sendEmailNotification = async (formData: FormData) => {
  //   // Method 1: Using Supabase Edge Functions (Recommended)
  //   try {
  //     const response = await fetch('/api/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to send email');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     // Don't throw error here - we still want to save the form data
  //   }
  // };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)",
        color: "white",
        minHeight: "100vh",
        pt: 12,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#3498db",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ecf0f1",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Get in touch with us for your infrastructure, road maintenance, civil, and electromechanical projects in UAE
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    color: "#3498db",
                    fontSize: "1.8rem",
                  }}
                >
                  Get In Touch
                </Typography>

                {/* Contact info items remain the same */}
                {/* Phone */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <FaPhone size={20} color="#3498db" />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ecf0f1" }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#bdc3c7" }}>
                      971 * *** ****
                    </Typography>
                  </Box>
                </Box>

                {/* WhatsApp */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(37, 211, 102, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <FaWhatsapp size={20} color="#25D366" />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ecf0f1" }}>
                      WhatsApp
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#bdc3c7" }}>
                      971 ** *** ****
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <FaEnvelope size={20} color="#3498db" />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ecf0f1" }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#3498db" }}>
                      rashid@rshamstech.com
                    </Typography>
                  </Box>
                </Box>

                {/* Address */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <FaMapMarkerAlt size={20} color="#3498db" />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ecf0f1" }}>
                      Address
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#bdc3c7" }}>
                      P.O. Box: ******, Dubai, UAE
                    </Typography>
                  </Box>
                </Box>

                {/* Business Hours */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(52, 152, 219, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <FaClock size={20} color="#3498db" />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ecf0f1" }}>
                      Business Hours
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#bdc3c7" }}>
                      Mon - Sun: 8:00 AM - 6:00 PM
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                color: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    color: "#3498db",
                    fontSize: "1.8rem",
                  }}
                >
                  Send us a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          "& .MuiInputLabel-root": { color: "#bdc3c7" },
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                            "&:hover fieldset": { borderColor: "#3498db" },
                            "&.Mui-focused fieldset": { borderColor: "#3498db" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          "& .MuiInputLabel-root": { color: "#bdc3c7" },
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                            "&:hover fieldset": { borderColor: "#3498db" },
                            "&.Mui-focused fieldset": { borderColor: "#3498db" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                        sx={{
                          "& .MuiInputLabel-root": { color: "#bdc3c7" },
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                            "&:hover fieldset": { borderColor: "#3498db" },
                            "&.Mui-focused fieldset": { borderColor: "#3498db" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          "& .MuiInputLabel-root": { color: "#bdc3c7" },
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                            "&:hover fieldset": { borderColor: "#3498db" },
                            "&.Mui-focused fieldset": { borderColor: "#3498db" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message / Requirement"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        sx={{
                          "& .MuiInputLabel-root": { color: "#bdc3c7" },
                          "& .MuiOutlinedInput-root": {
                            color: "white",
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                            "&:hover fieldset": { borderColor: "#3498db" },
                            "&.Mui-focused fieldset": { borderColor: "#3498db" },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        disabled={loading}
                        sx={{
                          background: loading 
                            ? "rgba(52, 152, 219, 0.5)" 
                            : "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
                          color: "white",
                          padding: "12px 32px",
                          borderRadius: "25px",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            transform: loading ? "none" : "translateY(-2px)",
                            boxShadow: loading 
                              ? "0 4px 15px rgba(52, 152, 219, 0.3)" 
                              : "0 6px 20px rgba(52, 152, 219, 0.4)",
                          },
                        }}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <FaPaperPlane />}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Info Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            p: 4,
            background: "rgba(52, 152, 219, 0.1)",
            borderRadius: "16px",
            border: "1px solid rgba(52, 152, 219, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#3498db",
            }}
          >
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ecf0f1",
              mb: 3,
              fontSize: "1.1rem",
            }}
          >
            Contact us today for a free consultation and quote for your infrastructure, road maintenance, civil, or electromechanical projects.
          </Typography>
          <Button
            component="a"
            href="tel:+971XXXXXXXXX"
            sx={{
              background: "linear-gradient(45deg, #3498db 0%, #2980b9 100%)",
              color: "white",
              padding: "12px 32px",
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(52, 152, 219, 0.4)",
              },
            }}
          >
            Call Now
          </Button>
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactUs;