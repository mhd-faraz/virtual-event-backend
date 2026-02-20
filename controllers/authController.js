const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require("../data/store");

// REGISTER
exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    role
  };

  users.push(user);

  res.json({ message: "User Registered Successfully" });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user)
    return res.status(404).send("User Not Found");

  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return res.status(401).send("Wrong Password");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};