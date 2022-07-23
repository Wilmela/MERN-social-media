const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.register =
  ("/register-user",
  async (req, res) => {
    const { username, email, password } = req.body;

    try {
      //Generate password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //create new user
      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      //Check is user with username exist
      const userExists = await User.findOne({ username });
      if (userExists)
        return res.status(401).json({ error: "User already exists" });

      //Save user to DB
      const result = await user.save();
      res.status(200).send({ result });
    } catch (error) {}
  });

exports.login = ("/user-login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ message: "user not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).json({error: 'wrong password'})
  
    res.status(200).json({user})
  } catch (error) {
    res.status(500).json(error)
  }
});
