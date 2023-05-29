const getAllUsers = (req, res) => {
  res.status(200).json({ data: "all users" });
};

const registerUser = (req, res) => {
  res.status(201).json({ data: "register user" });
};
const getUser = (req, res) => {
  res.status(200).json({ data: "get Single user" });
};
const updateUser = async (req, res) => {
  res.status(201).json({ data: `update user ${req.params.id}` });
};
const deleteUser = (req, res) => {
  res.status(200).json({ data: "delete user" });
};
export { getAllUsers, registerUser, getUser, updateUser, deleteUser };
