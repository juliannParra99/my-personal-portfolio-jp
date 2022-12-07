import  express from "express";
import indexRoutes from "./routes/index_routes.js"

const app = express();
app.use(indexRoutes)

//traigo mis routes, e indico que mi app la va a usar

//configuracion de motor de plantilla.
app.set('view engine', 'ejs')
app.set('views', './views')

const port = 3000;
app.listen(port,()=>{
    console.log(`server on port ${port}`)
})