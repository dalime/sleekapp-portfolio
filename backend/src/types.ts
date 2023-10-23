import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

// Initiate Environment Variables
dotenv.config();

// Constants
const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());

// Set SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

app.get("/", (req, res) => {
  res.status(200).send("Sleek App API");
});

app.post('/send-email', async (req, res) => {
  try {
    const body = `New ${req.body.service} Inquiry! Name: ${req.body.name}, Email: ${req.body.email}, Service: ${req.body.service}. Message: ${req.body.message}`;

    const msg = {
      to: process.env.SMTP_USER || "",
      from: process.env.SMTP_USER || "", // Use the email address or domain you verified above
      subject: `New Inquiry for ${req.body.service}`,
      text: body,
      html: `
        <div>
          <h1>New ${req.body.service} Inquiry</h1>
          <h2>Details</h2>
          <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Service: ${req.body.service}</li>
          </ul>
          <h2>Message</h2>
          <p>${req.body.message}</p>
        </div>
      `,
    };    

    // Send Email
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).send("Email sent successfully");
      }, error => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }

        res.status(500).send(error);
      });
  } catch (error) {
    // Print error and send
    console.error('Error sending email:', error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
