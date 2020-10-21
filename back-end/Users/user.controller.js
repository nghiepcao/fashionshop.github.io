const db = require("../dbConfig");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
// const mail = require("../helper/mail");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const shortId = require("shortid");
const jwt_decode = require("jwt-decode");
const mail = require("../helper/mail");
// const user = require("../models/user");
shortId.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
);
// const { Op } = require("sequelize/types");

// function sendcode(email) {
//   // const code = shortId.generate();
//   // const verify = await Verify.create({
//   //   user: user._id,
//   //   code
//   // });

//   mail.send(
//     email,
//     "This is the first email",
//     "this is what i want to tell you"
//   );
// }
const validateRegisterInput = require("../Validation/register");
const validateLoginInput = require("../Validation/login");
const validateVerifyInput = require("../Validation/verify");
const validateForgotInput = require("../Validation/forgot");

function sendCode(email, code) {
  mail.send(
    email,
    "This is email from GBN page ",
    "this is your code: " + code
  );
}
exports.reSend = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      const code = shortId.generate();
      sendCode(user.email, code);
      user.update({ codeforverify: code });
      return res.send("resend success");
    })
    .catch((err) => {
      return res.send("ERR: " + err);
    });
};
exports.getAll = (req, res) => {
  User.findAll().then((data) => {
    res.send(data);
  });
};
exports.getOne = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    res.send(data);
  });
};

exports.register = (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("Register is starting");

  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      // if (user.username == req.body.username) {
      //   return res.status(400).json({ name: "UserName already exit" });
      // }
      if (user) {
        return res.status(401).json({ name: "Username already exit" });
      }
      User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((users) => {
        if (users) {
          return res.status(401).json({ email: "Email already exit" });
        } else {
          User.create({
            // codenv: req.body.codenv,
            // fullname: req.body.fullname,
            username: req.body.username,
            // dayofbirth: req.body.dayofbirth,
            // phonenumber: req.body.phonenumber,
            email: req.body.email,
            // address: req.body.address,
            password: bcrypt.hashSync(req.body.password, 8),
            // isverify: req.body.isverify,
            // roles:req.body.roles
          })
            .then((user) => {
              const code = shortId.generate();
              console.log("CODE:" + code);
              console.log("username:" + user.username);

              // sendCode(user.email, code);
              user.update({ codeforverify: code });

              console.log("register successfully test git continue bao main");
              res.status(200).send({ verifyCode: code });
            })
            .catch((err) => {
              res.status(500).send("Fail, Error=>" + err);
            });
        }
      });
    })
    .catch((err) => {
      return res.send({ messErr: err });
    });
};
exports.forgotPassword = (req, res) => {
  const { errors, isValid } = validateForgotInput(req.body);
  const shortpass = shortId.generate();
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((users) => {
      if (!users) {
        return res.status(400).json({ name: "User or email not found" });
      }
      // if (user.email != req.body.email) {
      //   return res.status(400).json({ email: "Email or User not found" });
      // }
      const newPass = bcrypt.hashSync(shortpass, 8);
      users.update({ password: newPass });
      // sendCode(user.email, newPass);
      res.status(200).send({
        forgotPassword: shortpass,
        status: "Your new password is sended to your email",
      });
    })
    .catch((err) => {
      return res.status(501).send({ mess: err });
    });
};
exports.login = (req, res) => {
  console.log("Sign-In");
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ usernotfound: "User Not Found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).json({
          passwordincorrect: "Password incorrect",
        });
      }
      if (user.idverify == false) {
        return res
          .status(400)
          .json({ usernotverify: "Please verify your account" });
      }
      //   user.update({
      //     islogin: true
      //   })
      // user.islogin = true
      // User.update(islogin = true, {
      //   where: {
      //     username: req.body.username
      //   }
      // })
      var token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400, // expires in 24 hours
        }
      );
      var decode = jwt_decode(token);
      res.status(200).send({
        auth: true,
        message: "Login successfully",
        username: user.username,
        token: token,
        // islogin: user.islogin
        decode: decode,
        idverify: user.idverify,
        password: user.password,
      });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          msg: "update successfully",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: err,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Delete success",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};
exports.verify = (req, res) => {
  const code = req.body.code;
  const email = req.body.email;
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "email is not correct",
        });
      } else {
        if (code == user.codeforverify) {
          user.update({ idverify: true });
          return res.send("your account is verified");
        } else {
          return res.send("Your verify code is not correct");
        }
      }
    })
    .catch((err) => {
      return res.send({ ERR: err });
    });
};
