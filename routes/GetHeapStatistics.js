const express = require("express");

const Router = express.Router();

const GetHeapStatistics = require("../app/controllers/GetHeapStatisticsController");

Router.get("/getHeapStatistics", GetHeapStatistics.getHeapStatistics);


module.exports = Router;
