const express = require("express");
const Survey = require("../models/survey.js");

// Create a new Survey Private security route ==> /create/survey
exports.createSurvey = async (req, res) => {
  try {
    const survey = await Survey.create(req.body);

    res.status(200).json({ success: true, survey: survey });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error.message);
  }
};

// Get all surveys in the DB public route ==> /survey
exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find().populate("user", ["username", "email"]);
    res.status(200).json({ success: true, surveys: surveys });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error.message);
  }
};

// Get a single Survey by a creator Private security route ==> /survey/:id
exports.getSurveyById = async (req, res) => {
  try {
    const getSurveyById = await Survey.findById(req.params.id).populate(
      "user",
      ["email", "username"]
    );

    res.status(200).json({ success: true, survey: getSurveyById });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error.message);
  }
};

exports.updateSurvey = async (req, res, next) => {
  try {
    const updateSurvey = await Survey.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, survey: updateSurvey });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error.message);
  }
};

exports.deleteSurvey = async (req, res) => {
  try {
    await Survey.findByIdAndRemove(req.params.id);

    req
      .status(200)
      .json({ success: true, message: "SUrvey deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internall server error" });
    console.log(error.message);
  }
};
