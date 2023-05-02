const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const isEmail = require("validator/lib/isEmail.js");
module.exports = mongoose.model(
  "User",
  new Schema({
    name: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 3,
        // Quăng ra err cho catch hứng
        message: "Username must be at least 3 characters",
      },
    },
    email: {
      type: String,
      validate: {
        validator: (value) => isEmail,
        message: "Email is incorrect format",
      },
    },
    password: {
      //hashed/encrypted password
      type: String,
      required: true,
      //validate ??
    },
    dashboards: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        asset: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
        now: {
          type: Boolean,
        },
        startDate: {
          type: String,
        },
        toDate: {
          type: String,
        },
        timerange: {
          type: String,
        }
      }, 
    ],
    widgets: [
      {
        asset: {
          type: String
        },
        id: {
          type: String
        },
        id_widget: {
          type: String
        },
        widgetType:{
          type: String  
        },
        widgetName:{
          type: String  
        },
        periodNum:{
          type: Number  
        },
        periodUnit:{
          type: String  
        },
        parameter:{
          type: Array 
        },
        multiSelect:{
          type: Array  
        },
        alternativeLabel:{
          type: String  
        },
        decimalNumber:{
          type: Number  
        },
        color:{
          type: String  
        },
        lowlimitalert:{
          type: Number  
        },
        lowlimitwarning:{
          type: Number  
        },
        highlimitwarning:{
          type: Number  
        },
        highlimitalert:{
          type: Number  
        },
        yAxisLabel:{
          type: String  
        },
        width:{
          type: String  
        },
        height:{
          type: String  
        },
        lastX:{
          type: String  
        },
        lastY:{
          type: String  
        },
        ratio:{
          type: Number  
        },
        UnitGauge:{
          type: String  
        },
        minRange:{
          type: String  
        },
        maxRange:{
          type: String  
        }
      }
    ],
    kpis: [
      {
        id: {
          type: String
        },
        name: {
          type: String
        },
        formula:{
          type: Object
        },
        date: {
          type: String
        }
      }
    ],
  })
);
