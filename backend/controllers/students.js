const getAllStudents = (req, res) => {
  res.status(200).json({ data: "all students" });
};

export { getAllStudents };
