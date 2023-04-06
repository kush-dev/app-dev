// routes/editAccount.js

const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

// PUT (update) an existing account
router.put("/:id", getAccount, async (req, res) => {
  if (req.body.firstName != null) {
    res.account.firstName = req.body.firstName;
  }

  if (req.body.lastName != null) {
    res.account.lastName = req.body.lastName;
  }

  if (req.body.email != null) {
    res.account.email = req.body.email;
  }

  if (req.body.password != null) {
    res.account.password = req.body.password;
  }

  try {
    const updatedAccount = await res.account.save();
    res.json(updatedAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// helper function to get a single account by ID
