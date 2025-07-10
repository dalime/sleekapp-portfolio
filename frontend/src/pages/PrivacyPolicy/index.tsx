import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

// Components
import {
  Page,
  MainHeading,
  Paragraph,
} from "../../components";

function PrivacyPolicy() {
  const theme = useTheme();

  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy - Sleek App</title>
        <meta
          name="description"
          content="Sleek App Privacy Policy - Learn how we collect, use, and protect your personal information"
        />
      </Helmet>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <MainHeading sx={{ textAlign: "center", mb: 4 }}>
          Privacy Policy
        </MainHeading>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: "center" }}>
            Effective Date: 07/10/2025
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              1. Introduction
            </Typography>
            <Paragraph>
              We respect your privacy and are committed to protecting the personal 
              information you share with us. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our web development and 
              software services.
            </Paragraph>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              2. Information We Collect
            </Typography>
            <Paragraph sx={{ mb: 2 }}>
              We may collect personal information that you voluntarily provide to us when you:
            </Paragraph>
            <Box component="ul" sx={{ mb: 2, pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Contact us for inquiries or support
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Request a quote or consultation
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Enter into a contract for web development or software services
              </Typography>
            </Box>
            <Paragraph sx={{ mb: 2 }}>
              The types of information we may collect include:
            </Paragraph>
            <Box component="ul" sx={{ mb: 2, pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>Name</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Email address</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Phone number</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Business or company information</Typography>
              <Typography component="li" sx={{ mb: 1 }}>Project details</Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              3. How We Use Your Information
            </Typography>
            <Paragraph sx={{ mb: 2 }}>
              We use the collected information to:
            </Paragraph>
            <Box component="ul" sx={{ mb: 2, pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Communicate with you about your project or inquiry
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Provide web development and software services
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Improve our website and services
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Respond to customer support requests
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Comply with legal obligations
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              4. Sharing Your Information
            </Typography>
            <Paragraph sx={{ mb: 2 }}>
              We do not sell or share your personal information with third parties, except:
            </Paragraph>
            <Box component="ul" sx={{ mb: 2, pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                To comply with legal requirements (e.g., court orders)
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                To trusted service providers who assist in operating our website or services, 
                under confidentiality agreements
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              5. Data Security
            </Typography>
            <Paragraph>
              We implement reasonable security measures to protect your information from unauthorized 
              access, alteration, or disclosure. However, no method of transmission over the Internet 
              or method of electronic storage is 100% secure.
            </Paragraph>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              6. Your Choices
            </Typography>
            <Paragraph sx={{ mb: 2 }}>
              You have the right to:
            </Paragraph>
            <Box component="ul" sx={{ mb: 2, pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Access, update, or delete your personal information
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Withdraw consent to data processing (where applicable)
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Request a copy of the information we hold about you
              </Typography>
            </Box>
            <Paragraph>
              To exercise these rights, please contact us at support@sleekapp.io.
            </Paragraph>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              7. Cookies and Analytics
            </Typography>
            <Paragraph>
              Our website may use cookies or similar tracking technologies to improve your browsing 
              experience. You can control cookies through your browser settings.
            </Paragraph>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              8. Third-Party Links
            </Typography>
            <Paragraph>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of those websites.
            </Paragraph>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              9. Changes to This Policy
            </Typography>
            <Paragraph>
              We may update this Privacy Policy from time to time. Changes will be posted on this 
              page with the updated effective date.
            </Paragraph>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }}>
              10. Contact Us
            </Typography>
            <Paragraph sx={{ mb: 2 }}>
              If you have any questions about this Privacy Policy, please contact us at:
            </Paragraph>
            <Box component="ul" sx={{ mb: 2, pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Email: support@sleekapp.io
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Website: https://sleekapp.io
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Page>
  );
}

export default PrivacyPolicy;