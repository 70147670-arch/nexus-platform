const Meeting = require("../models/Meeting");


// CREATE MEETING
exports.createMeeting = async (req, res) => {

  try {

    const {
      title,
      date,
      time,
      investorId,
      entrepreneurId
    } = req.body;

    // conflict check
    const existingMeeting = await Meeting.findOne({
      where: {
        date,
        time,
        investorId,
      }
    });

    if (existingMeeting) {

      return res.status(400).json({
        message: "Time slot already booked"
      });

    }

    const meeting = await Meeting.create({
      title,
      date,
      time,
      investorId,
      entrepreneurId,
    });

    res.status(201).json({
      message: "Meeting scheduled",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// GET ALL MEETINGS
exports.getMeetings = async (req, res) => {

  try {

    const meetings = await Meeting.findAll();

    res.json(meetings);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// UPDATE STATUS
exports.updateMeetingStatus = async (req, res) => {

  try {

    const { id } = req.params;

    const { status } = req.body;

    const meeting = await Meeting.findByPk(id);

    if (!meeting) {

      return res.status(404).json({
        message: "Meeting not found"
      });

    }

    meeting.status = status;

    await meeting.save();

    res.json({
      message: "Meeting updated",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};