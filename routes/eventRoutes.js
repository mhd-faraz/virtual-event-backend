const express = require("express");
const auth = require("../middleware/authmiddleware");

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  registerEvent
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", auth, getEvents);
router.post("/", auth, createEvent);
router.put("/:id", auth, updateEvent);
router.delete("/:id", auth, deleteEvent);
router.post("/:id/register", auth, registerEvent);

module.exports = router;