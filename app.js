// const math = require("./math.js");
// const file=require('./file.js');

// const result = math.add(7, 10);
// console.log(result);
// const readfile=file.readFile;

// create serverusing http module
// const http = require('http');
//  const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('Hello World');
//     res.end();

// }
// )

// server.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// }
// )

// const express = require("express");
// const port = 5000;
// const app = express();

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/users", (req, res) => {
//   // res.send(users);
//   res.json(users)
// });
// const users = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "Doe",
//   },
// ];
// app.get("/users/:id", (req, res) => {
//   const user_id=req.params.id;
//   console.log(typeof user_id)
//   console.log(user_id);
//   const user = users.find((user) => user.id == parseInt(user_id) );
//   if (!user) {
//     res.status(404).send("User not found");
//   }
//   res.send(user);
// }
// );

// app.post("/post-user", (req, res) => {
//   // const data=req.body;
//   // const name=data.name;
//   const name=req.body.name;
//   res.send(name);
// }
// );

const express = require("express");
const app = express();
require('dotenv').config();
const connectDB = require("./src/Config/db");
const userRoute=require("./src/Routes/userRoute")
const authRoutes=require("./src/Routes/authRoutes")
app.use(express.json());
// const port = process.env.port;
const port=8000;
// used to connect to the database
connectDB();

app.use('/api/user',userRoute);
app.use('/api/auth', authRoutes);


app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

