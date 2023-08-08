import User from "../model/Register.js";
export const register = (req, res) => {
  // const { username, email, password } = req.body;
  const newUser = new User(req.body)
    .save()
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "user registered successfully", newUser })
    )
    .catch((err) => console.log(err));
};
