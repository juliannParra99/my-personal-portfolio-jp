////this folder will contain all my routes for a better organization
import {  Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render('index.ejs', { title : "Hello to my portfolio!"});//render acepta como parmetro un archivo de la carpeta viws. Para eso configuramos el dirname
});

router.get("/about", (req, res) => {
  res.render('about.ejs',{title : "About me", description: "About julian"})
});

router.get("/contact", (req,res ) => {
  res.render('contact.ejs', {title: "Contact"});
});




export default router;
