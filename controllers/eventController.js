const { events } = require("../data/store");
const sendEmail = require("../utils/sendEmail");

// CREATE EVENT (Organizer Only)
exports.createEvent = (req, res) => {
  if (req.user.role !== "organizer")
    return res.status(403).send("Only organizers allowed");

  const event = {
    id: Date.now().toString(),
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    participants: []
  };

  events.push(event);
  res.json(event);
};

// GET ALL EVENTS
exports.getEvents = (req, res) => {
  res.json(events);
};

// UPDATE EVENT
exports.updateEvent = (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  Object.assign(event, req.body);
  res.json(event);
};

// DELETE EVENT
exports.deleteEvent = (req, res) => {
  const index = events.findIndex(e => e.id === req.params.id);
  events.splice(index, 1);
  res.send("Event Deleted");
};

// REGISTER FOR EVENT
exports.registerEvent = async (req, res) => {
  const event = events.find(e => e.id === req.params.id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  // Check if user already registered
  if (event.participants.includes(req.user.id)) {
    return res.status(400).json({ message: "User already registered" });
  }

  event.participants.push(req.user.id);

  try {
    await sendEmail();
    res.json({ message: "Registered Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Email failed, but registration saved" });
  }
};