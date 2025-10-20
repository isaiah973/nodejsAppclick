const expressApp = require("express");
const app = expressApp();

app.get("/", function (request, response) {
  return response.send("hello world");
});

app.get("/get-students", (request, response) => {
   const students = ["Funsho", "Adeola", "Isaiah", "John", "Doe"];
   return response.json({
    response_status: "success",
    students: students,
   });
});

app.get("/get-student/:name", (request, response) => {
   const studentName = request.params.name;
   const students = ["Funsho", "Adeola", "Isaiah", "John", "Doe"];

   if (students.includes(studentName)) {
    return response.json({
      response_status: "success",
      message: "Student is our classmate",
      student: studentName,
    });
   } else {
    return response.status(404).json({
      response_status: "error",
      message: "Student not found in our class",
    });
   }
});


app.listen(4000, () => {
  console.log("Server is running on port 4000");
})

