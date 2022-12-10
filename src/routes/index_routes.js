////this folder will contain all my routes for a better organization
import {  Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("my principal page");
});

router.get("/about", (req, res) => {
  res.send("About me");
});

router.get("/contact", (req,res ) => {
  res.render('index.ejs', {title: "My page"});
});

export default router;
