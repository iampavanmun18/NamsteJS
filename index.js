const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide the age");
  } else if (req.query.age < 18) {
    res.send("Your Age is Less than 18 you can't Login to Home Page");
  } else if (req.query.age) {
    res.send("This is a Home Page");
  } else {
    next(); // this is used to run the next method or next function in the program so that node should know what to execute after one condition.
  }
};

//we can use middlwware using (app.use) and we can pass this to routes as a 2nd Param below.
app.use(reqFilter);

//reqFilter is a middleware used in routing below
app.get("/", reqFilter, (req, res) => {
  res.json([
    {
      name: "Pavan",
      email: "pavan@gmail.com",
    },
    {
      name: "Yash",
      email: "yash@gmail.com",
    },
  ]);
});

app.listen(4000);
