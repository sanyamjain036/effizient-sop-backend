import 'dotenv/config'
import 'colors'
import cors from 'cors'
import express from 'express'
import connectDB  from './db/index.js'
import http from "http"
import sopFormRouter from './routes/formRoutes.js'
import hleRouter from './routes/hleRoutes.js'
const app = express();
const httpServer = http.createServer(app);

connectDB();
app.use(cors()) //every origin allowed
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("I'm working fine!");
  });
  
app.use("/api/sopform", sopFormRouter);
app.use("/api/hle", hleRouter);


const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
  console.log(`App listening on port ${port}`.green.underline);
});
