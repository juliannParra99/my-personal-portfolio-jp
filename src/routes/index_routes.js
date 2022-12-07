////this folder will contain all my routes for a better organization
import {  Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("my principal page");
});

router.get("/about", (req, res) => {
  res.send("About me");
});

router.get("/Contact", (req,res ) => {
  res.send("Contact me");
});

export default router;
