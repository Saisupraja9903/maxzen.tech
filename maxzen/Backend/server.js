const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = "YOUR_TWILIO_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+91YOURNUMBER",
      body: `New Contact:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
    });

    res.json({ message: "WhatsApp message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));