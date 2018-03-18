const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Chores collection and inserts the chores below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactchorelist",
  {
    useMongoClient: true
  }
);

const choreSeed = [
  {
    title: "Dust your room",
    kid: "John",
    reward: "50 points",
    date: new Date(Date.now())
  },
  {
    title: "Swiffer the den",
    kid: "Steve",
    reward: "60 points",
    date: new Date(Date.now())
  },
  {
    title: "Clean toilet",
    kid: "David",
    reward: "80 points",
    date: new Date(Date.now())
  },
  {
    title: "Clean tub",
    kid: "Tommy",
    reward: "50 points",
    date: new Date(Date.now())
  }
];

db.Chore
  .remove({})
  .then(() => db.Chore.collection.insertMany(choreSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
