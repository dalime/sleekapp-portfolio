import React, { CSSProperties, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";

// Components
import { Section, Subheading, Paragraph } from "../../../components";

// Styles
import { Form, Separator, Line, LogoImg } from "./index.styles";

// Assets
import SleekAppLogo from "../../../assets/images/sleekapp-logo.png";

function ContactForm() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<
    "design" | "development" | "copywriting"
  >("development");
  const [message, setMessage] = useState<string>("");

  // Component Styles
  const formControlStyle: CSSProperties = {
    width: isMobile ? "100%" : "50%",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  };

  /**
   * Handles the form submission and passes values to email SMTP server
   * @param e React.FormEvent<HTMLFormElement>
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(
      "Sending new message!",
      "First Name: ",
      firstName,
      "Email: ",
      email,
      "Service: ",
      service,
      "Message: ",
      message
    );
  };

  return (
    <Section
      style={{
        paddingTop: "7.5%",
        paddingBottom: "7.5%",
      }}
    >
      <Separator>
        <Line />
        <LogoImg src={SleekAppLogo} alt="Sleek App" />
        <Line />
      </Separator>
      <Subheading sx={{ marginBottom: 1 }}>Leave Us A Message</Subheading>
      <Form onSubmit={handleSubmit}>
        <FormControl style={formControlStyle} required>
          <InputLabel htmlFor="first-name">Your First Name</InputLabel>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            aria-describedby="first-name-helper-text"
          />
        </FormControl>
        <FormControl style={formControlStyle} required>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            aria-describedby="email-helper-text"
          />
          <FormHelperText id="email-helper-text">
            We'll send you a confirmation email.
          </FormHelperText>
        </FormControl>
        <FormControl style={formControlStyle}>
          <FormLabel id="service-group-label">
            Which Service Are You Interested In? (Optional)
          </FormLabel>
          <RadioGroup
            aria-labelledby="service-group-label"
            defaultValue="develompent"
            value={service}
            onChange={(e) =>
              setService(
                e.target.value as "design" | "development" | "copywriting"
              )
            }
            name="service-group"
          >
            <FormControlLabel
              value="design"
              control={<Radio />}
              label="Design"
            />
            <FormControlLabel
              value="development"
              control={<Radio />}
              label="Development"
            />
            <FormControlLabel
              value="copywriting"
              control={<Radio />}
              label="Copywriting"
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={formControlStyle} required>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={5}
            id="message"
            aria-describedby="message-helper-text"
            placeholder="Message*"
          />
          <FormHelperText id="message-helper-text">
            Please describe your project in detail.
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          sx={{ marginTop: 3, padding: 1.5 }}
        >
          Submit
        </Button>
      </Form>
      <Paragraph sx={{ textAlign: "center", marginTop: 3 }}>
        We'll get back to you shortly.
      </Paragraph>
    </Section>
  );
}

export default ContactForm;
