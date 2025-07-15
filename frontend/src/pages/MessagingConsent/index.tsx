import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Typography,
  TextField,
  Alert,
  Snackbar,
  useTheme,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

// Components
import {
  Page,
  MainHeading,
  Paragraph,
} from "../../components";

// Supabase
import { supabase } from "../../lib/supabase";

function MessagingConsent() {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [infoConsentChecked, setInfoConsentChecked] = useState(false);
  const [promoConsentChecked, setPromoConsentChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInfoConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfoConsentChecked(event.target.checked);
  };

  const handlePromoConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoConsentChecked(event.target.checked);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, error } = await supabase
        .from('messaging_consents')
        .insert([
          {
            phone_number: phoneNumber,
            consent: true,
            timestamp: new Date().toISOString(),
            source: 'web_form',
            status: 'active'
          }
        ])
        .select();

      if (error) throw error;

      setShowSuccess(true);
      setInfoConsentChecked(false);
      setPhoneNumber("");
    } catch (error) {
      console.error('Error storing consent:', error);
      setErrorMessage("Failed to submit consent. Please try again.");
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Messaging Consent - Sleek App</title>
        <meta
          name="description"
          content="Provide your consent to receive messages from Sleek App"
        />
      </Helmet>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <MainHeading sx={{ textAlign: "center", mb: 4 }}>
          Messaging Consent
        </MainHeading>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Message Consent Policy
          </Typography>
          
          <Paragraph sx={{ mb: 3 }}>
            By providing your consent, you agree to receive messages from Sleek App LLC. 
            These messages may include:
          </Paragraph>

          <Box component="ul" sx={{ mb: 3, pl: 2 }}>
            <Typography component="li" sx={{ mb: 1 }}>
              Important updates about your project
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Service notifications
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Project-related communications
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Occasional promotional messages
            </Typography>
          </Box>

          <Paragraph sx={{ mb: 3 }}>
            You can opt-out of these messages at any time by contacting us or 
            following the unsubscribe instructions in any message you receive.
          </Paragraph>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
              placeholder="+1234567890"
              sx={{ mb: 3 }}
              helperText="Please include country code (e.g., +1 for US)"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={infoConsentChecked}
                  onChange={handleInfoConsentChange}
                  required
                />
              }
              label="I consent to receiving  informational text messages  from the Sleek App LLC"
              sx={{ mb: 0 }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={promoConsentChecked}
                  onChange={handlePromoConsentChange}
                  required
                />
              }
              label="I consent to receiving marketing and promotional text messages from Sleek App LLC"
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!infoConsentChecked || !promoConsentChecked || !phoneNumber || isSubmitting}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: isMobile ? "1rem" : "1.1rem",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Consent"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Consent submitted successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
      >
        <Alert severity="error" onClose={() => setShowError(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Page>
  );
}

export default MessagingConsent; 