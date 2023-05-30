const getAllStudents = (req, res) => {
  res.status(200).json({ data: "all students" });
};
const registerStudent = (req, res) => {
  res.status(201).json({ data: "register student" });
};
const getStudent = (req, res) => {
  res.status(200).json({ data: "get Single student" });
};
const updateStudent = async (req, res) => {
  console.log(req.query)
  console.log(req.params)
  res.status(201).json({ data: `update student ${req.params.id}` });
};
const deleteStudent = (req, res) => {
  res.status(200).json({ data: "delete student" });
};
export { getAllStudents, registerStudent, getStudent, updateStudent, deleteStudent };
