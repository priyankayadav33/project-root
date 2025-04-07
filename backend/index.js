require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/callback', async (req, res) => {
  const { token, email } = req.body;

  try {
    // Verify the token
    const response = await axios.get(`${process.env.AUTH0_DOMAIN}userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = response.data;

    // Send email with Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Auth System" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Auth0 Access Token',
      text: `Here is your token: ${token}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ error: 'Token validation failed or email failed to send' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
