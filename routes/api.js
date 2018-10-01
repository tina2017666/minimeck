const express = require("express");
const router = express.Router();
const Pilot = require("../models/pilot");
const Infor = require("../models/infor");
const Mech = require("../models/mech");
router.get("/pilot", (req, res) => {
  console.log(req.url);
  Pilot.find({}).then(data => {
    console.log(data);
    //since it's 倒序 stored
    //res.json(data.slice(0).reverse());
    res.json(data);
  });
});
router.get("/pilot/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Pilot.find({ _id: id }).then(data => {
    console.log(data);
    //since it's 倒序 stored
    //res.json(data.slice(0).reverse());
    res.json(data);
  });
});
router.post("/pilot", (req, res, next) => {
  //the request body should meet the schema rules

  Pilot.create(req.body)
    .then(user => {
      res.send(user);
      // error handling if error , go next,
      // router is a middle-ware
      // next is dealed in server.js
    })
    .catch(next);
});
router.delete("/pilot/:id", (req, res) => {
  // the id is the unique created by mongoDB
  let id = req.params.id;
  Pilot.findByIdAndRemove({ _id: id }).then(user => {
    // user 是操作的specific的数据
    res.send(user);
  });
});

// change the data
router.put("/pilot/:id", (req, res) => {
  // console.log(req.params.id);
  // User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(user => {
  //   // User.findOne({ _id: req.params.id }).then(user => {
  //   //   res.send(user);
  //   // });
  //   console.log(user);
  //   res.send(user);
  // });
  const id = req.params.id;
  Pilot.find({ _id: id }).then(data => {
    Pilot.findByIdAndUpdate({ _id: id }, req.body).then(data => {
      res.json(data);
    });
  });
});

router.get("/mech/:unit", (req, res) => {
  const unit = req.params.unit;
  Mech.find({ unitName: unit }).then(data => {
    console.log(data);
    //since it's 倒序 stored
    //res.json(data.slice(0).reverse());
    res.json(data);
  });
});
router.post("/mech", (req, res, next) => {
  Mech.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(next);
});
router.get("/mech", (req, res) => {
  console.log(req.url);
  Mech.find({}).then(data => {
    console.log(data);
    //since it's 倒序 stored
    //res.json(data.slice(0).reverse());
    res.json(data);
  });
});

router.post("/infor", (req, res) => {
  console.log(req.body.unitName);
  Infor.find({ unitName: req.body.unitName }).then(data => {
    console.log(data);
    if (data.length !== 0) {
      res.json(true);
    } else {
      res.send(false);
    }
    //since it's 倒序 stored
    //res.json(data.slice(0).reverse());
  });
});
module.exports = router;
