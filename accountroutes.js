// routes/account.js

const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

// GET all accounts
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single account
router.get("/:id", getAccount, (req, res) => {
  res.json(res.account);
});

// helper function to get a single account by ID
async function getAccount(req, res, next) {
  try {
    account = await Account.findById(req.params.id);
    if (account == null) {
      return res.status(404).json({ message: "Cannot find account" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.account = account;
  next();
}

// POST a new account
router.post("/", async (req, res) => {
  const account = new Account({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newAccount = await account.save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
