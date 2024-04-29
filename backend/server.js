const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv=require("dotenv");
// const userRoute=require("./routes/userRoute")
// app.use(express.json());
// dotenv.config();
//  // Encoding special characters in the password

// mongoose.connect('mongodb+srv://testdb:Abcd1234@cluster0.y5uhs98.mongodb.net/newdb')
//   .then(() => {
//     console.log("connected");
//     app.listen(process.env.PORT||8002)
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });



// app.use(userRoute);const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const userRoute = require("./routes/userRoute");
const cors = require("cors");
app.use(express.json());
app.use(cors());
//Connect to mongodb database(locally)
mongoose
  .connect('mongodb+srv://testdb:Abcd1234@cluster0.y5uhs98.mongodb.net/newdb')
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));

app.use(userRoute);