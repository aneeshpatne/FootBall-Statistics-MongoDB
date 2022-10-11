const mongoose = require("mongoose");

//** connection to database */
const conn_str =
  "mongodb://localhost:27017/football";

mongoose
  .connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected successfully..."))
  .catch((error) => console.log(error));

  const userSchema = new mongoose.Schema({
    Season: String,
    Date: String,
    HomeTeam: String,
    AwayTeam: String,
    FTHG: String,
    FTAG: String,
    HTHG: String,
    HTAG: String,
    HTR: String,
  });
const user = mongoose.model('fb2', userSchema);
//console.log(user.find())
//const user = new mongoose.model("student", userSchema);

/** Express Mongoose Integration **/
const express = require("express");
const app = express();
const router = express.Router();

router.get("/:id", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  let data = await user.find({ _id: req.params.id });
  console.log(data);

  // res.send(req.params);
  res.send(data);
});

router.post("/2", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data2 = req.body;
  console.log(req_data2.payload);
  payload = req_data2.payload;
  let search2 = await user.find().where('AwayTeam').equals(payload).exec();
  //search1 = search1.slice(0,3);
  console.log(search2);
  res.send(search2);
  
});
router.post("/1", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find().where('HomeTeam').equals(payload).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/3", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['HomeTeam', -1]]).limit(15).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/4", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-HomeTeam', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/5", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['AwayTeam', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/6", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-AwayTeam', -1]]).skip(1000).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/7", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['FTHG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/8", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-FTHG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/9", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['FTAG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/10", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-FTAG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/11", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['HTHG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/12", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-HTHG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/13", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['HTAG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/14", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-HTAG', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/15", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['Season', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
router.post("/16", async (req, res) => {
  /** getting user email */
  console.log(req.params.id);
  console.log('module');
  req_data1 = req.body;
  console.log(req_data1.payload);
  payload = req_data1.payload;
  let search1 = await user.find({}).sort([['-Season', -1]]).limit(20).exec();
  //search1 = search1.slice(0,3);
  console.log(search1);
  res.send(search1);
  
});
//router.route("/away").post(async (req, res) => {
  //console.log('here')
  //req_data2 = req.body;
 // console.log(req_data2.payload);
 // payload = req_data2.payload;
 // let search2 = await user.find().where('AwayTeam').equals(payload).exec();
  //search1 = search1.slice(0,3);
 // console.log(search2);
 // res.send(search2);
  
  //let obj = new user(req_data);
  //let result = await obj.save();
 // console.log(result);
  // res.send(req_data);
  //res.send(result);
//})

router

  .route("/")
  .get(async (req, res) => {
    let data = await user.find().limit(15); // collection_name.find()
    //console.log(data);
    res.send(data);
  })
  .post(async (req, res) => {
    req_data = req.body;
    // console.log(req_data);
    let obj = new user(req_data);
    let result = await obj.save();
    console.log(result);
    // res.send(req_data);
    res.send(result);
  })
    

  
    //let obj = new user(req_data);
    //let result = await obj.save();
   // console.log(result);
    // res.send(req_data);
    //res.send(result);
  

  .put(async (req, res) => {
    req_data = req.body;
    console.log(req_data);
    let result = await user.updateOne(
      { _id: req_data.id },
      {
        $set: {
          Season: req_data.Season,
          Date: req_data.Date,
          HomeTeam: req_data.HomeTeam,
          AwayTeam: req_data.AwayTeam,
          FTHG: req_data.FTHG,
          FTAG: req_data.FTAG,
          FTR: req_data.FTR,
          HTHG: req_data.HTHG,
          HTAG: req_data.HTAG,
          HTR: req_data.HTR,

        },
      }
    );
    res.send(result);
    // res.send(req_data);
  })
  .delete(async (req, res) => {
    let result = await user.deleteOne({ _id: req.body.id });
    console.log(result);
    res.send(result);
  });

//router
//  .route("/getHTNames")
 // .post(async (req, res) => {
 //   let payload = req.body.payload.trim();
 //   console.log(payload);

 // });

module.exports = router;
