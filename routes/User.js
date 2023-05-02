const express = require("express");
const Router = express.Router();

const UserController = require("../app/controllers/UserController")

//GET ALL USER
Router.get("/getallusers", UserController.getAllUsers);
Router.post("/updateUser", UserController.updateUser);
Router.post("/addWidget", UserController.addWidget);
Router.post("/deleteWidget", UserController.deleteWidget);
Router.post("/deleteDashboard", UserController.deleteDashboard);
Router.post("/addKPI", UserController.addKPI);
Router.post("/deleteKPI", UserController.deleteKPI);
   
module.exports = Router;