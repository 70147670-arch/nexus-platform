const express = require("express");

const router = express.Router();

const upload = require(
  "../middleware/uploadMiddleware"
);

const controller = require(
  "../controllers/documentController"
);


// UPLOAD
router.post(

  "/upload",

  upload.single("file"),

  controller.uploadDocument

);


// GET
router.get(

  "/",

  controller.getDocuments

);


module.exports = router;