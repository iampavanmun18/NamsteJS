module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please Provide the age" );
    } else if (req.query.age < 18) {
      res.send("Your Age is Less than 18 you can't Login to Home Page");
    } else if (req.query.age) {
      res.send("Welcome To Middlware (Node)");
    } else {
      next(); // this is used to run the next method or next function in the program so that node should know what to execute after one condition.
    }
  };