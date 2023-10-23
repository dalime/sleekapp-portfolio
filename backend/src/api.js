"use strict";
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

// Initiate Environment Variables
dotenv.config();

// Constants
const app = express();
// const PORT = 8000;

// Create a router to handle routes
const router = express.Router();

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

// Set SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

router.get("/", (req, res) => {
  res.status(200).send("Sleek App API");
});

router.post("/send-email", async (req, res) => {
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
    sgMail.send(msg).then(
      () => {
        res.status(200).send("Email sent successfully");
      },
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }

        res.status(500).send(error);
      }
    );
  } catch (error) {
    // Print error and send
    console.error("Error sending email:", error);
    res.status(500).send(error);
  }
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
