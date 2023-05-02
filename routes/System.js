const express = require("express");

const Router = express.Router();

const SystemController = require("../app/controllers/SystemController");

Router.get("/CPUUsage", SystemController.getCPUUsage);


module.exports = Router;
