import express from "express";
const homeRouter = require("./homeRoute");

export default (app) => {
  app.use(express());
  app.use("/api/v1/home", homeRouter);
};
