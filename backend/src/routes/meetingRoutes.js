const express = require("express");

const router = express.Router();

const {
  createMeeting,
  getMeetings,
  updateMeetingStatus
} = require("../controllers/meetingController");


// CREATE
router.post("/", createMeeting);


// GET
router.get("/", getMeetings);


// UPDATE STATUS
router.put("/:id", updateMeetingStatus);

module.exports = router;
