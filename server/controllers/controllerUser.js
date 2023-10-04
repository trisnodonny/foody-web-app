const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const nodemailer = require("nodemailer");
const sendgrigTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgrigTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      api_key: process.env.NODEMAILER_API_KEY || "",
    },
  })
);

class ControllerUser {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
        phoneNumber,
      });
      transporter.sendMail({
        from: "trisnodonny@gmail.com",
        to: email,
        subject: `Welcome! Your Registration Was Successful 🚀`,
        html: `
        <h3>
          Dear ${username},

          Congratulations! 🎉
          
          You're now part of Foody's exclusive community. Your registration was a success, and we're excited to have you onboard.
          
          Get ready for an amazing journey with us! 🌟
          
          Best regards,
          The Foody Team
        </h3>
        `,
      });
      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: `EmailRequired` };
      if (!password) throw { name: `PasswordRequired` };

      const user = await User.findOne({
        where: {
          email,
        },
      });

      console.log(user);

      if (!user) throw { name: "InvalidLogin" };

      const isValidPassword = comparePassword(password, user.password);

      if (!isValidPassword) throw { name: "InvalidLogin" };

      const accessToken = signToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        access_token: accessToken,
        username: user.username,
      });
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      const { google_token } = req.headers;
      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          username: payload.name,
          password: "google-sign-in",
        },
        hooks: false,
      });

      const accessToken = signToken({
        id: user.id,
        email: user.email,
        username: user.username,
      });

      res.status(200).json({
        access_token: accessToken,
        username: user.username,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ControllerUser;
