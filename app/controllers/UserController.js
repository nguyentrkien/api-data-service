const { validationResult } = require("express-validator");
const UserRepository = require("../repositories/UsersRepository");
const HttpRequestCode = require("../../utils/HttpRequestCode");

const User = require("../models/User");

class UserController {
  getAllUsers = async function (req, res) {
    try {
      const user = await User.find()
      res.status(HttpRequestCode.OK).json(user);
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };

  updateUser = async function (req, res) {
    try {
      await User.updateOne({ _id: req.body._id}, { $addToSet: {dashboards: req.body.dashboards}})
      res.status(HttpRequestCode.OK).json(req.body._id);
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };
  
  addWidget = async function (req, res) {
    try {
      await User.updateOne({ _id: req.body._id}, { $addToSet: {widgets: req.body.widgets}})
      res.status(HttpRequestCode.OK).json(req.body._id);
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };

  deleteWidget = async function (req, res) {
    try {
      await User.updateOne({ _id: req.body._id}, { $pull: { widgets: {id_widget: req.body.id_widget}}})
      res.status(HttpRequestCode.OK).json(req.body._id);
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };

  deleteDashboard = async function (req, res) {
    try {
      await User.updateOne({ _id: req.body._id}, { $pull: { widgets: {id: req.body.id}}})
      await User.updateOne({ _id: req.body._id}, { $pull: { dashboards: {id: req.body.id}}})
      res.status(HttpRequestCode.OK).json(req.body._id);
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };

}

module.exports = new UserController();
