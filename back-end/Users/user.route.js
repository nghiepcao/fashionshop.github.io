var express = require("express");
var router = express.Router();
const controller = require("./user.controller");
// const authJwt = require("../verifyJwtToken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("index from nodejs server");
});
router.post("/api/register", controller.register);
router.post("/api/login", controller.login);
// router.get("/login", controller.checkLogin)
// router.post("/logout", function (req, res) {
//   controller.logout;
// });

// router.get("/test/user", [authJwt.verifyToken], controller.userContent);
// router.get(
//   "/test/pm",
//   [authJwt.verifyToken, authJwt.isPmOrAdmin],
//   controller.managementBoard
// );
// router.get(
//   "/test/admin",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.adminBoard
// );
router.post("/api/forgotpassword", controller.forgotPassword);
router.post("/api/resend", controller.reSend);
router.post("/api/verify", controller.verify);
router.get("/api/getone/:id", controller.getOne);
router.get("/api/getall", controller.getAll);
router.put("/api/update/:id", controller.update);
router.delete("/api/delete/:id", controller.delete);
module.exports = router;
