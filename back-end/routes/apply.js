const express = require("express");
const router = express.Router();
const applyController = require("../controllers/applyController");

router
  .route("/:postID")
  .get(applyController.getAllApplicants)
  .post(applyController.applyToPost);

module.exports = router;
