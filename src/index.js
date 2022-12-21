import express from "express";
import indexRoutes from "./routes/index_routes.js";
//necesario para crear las rutas absolutas para que pueda ser accedido taal desde cualqueir sistema operativo
import { dirname, join } from "path"; // retorna una ruta node path hace que la ruta obtenida sea distinta dependiendo del sistema operativo; dirname devuelve un  string del nombre de directorio path; El path.join()método une todos pathlos segmentos dados utilizando el separador específico de la plataforma como delimitador, osea, les brinda una concatenacion acorde segun el sistema operativo

//Esta función garantiza la decodificación correcta de los caracteres codificados en porcentaje, así como una cadena de ruta absoluta válida multiplataforma
import { fileURLToPath } from "url";

//configuro mis rutas absolutas.
const __filename = fileURLToPath(import.meta.url); // La ruta del ARCHIVO Node.js específico de la plataforma completamente resuelta. devuelvela ruta de carpetas carpeta y archivo
const __dinarme = dirname(__filename); //devulve la ruta  de la carpeta donde esta el archivo,de filename
// console.log('this is file nme: ',__filename);
// console.log('this is dirname',__dinarme);
//la configuracion de  __Dirname es para que cuando configuremos el uso de template engine que vamos a utilizar, le brindemos el acceso a la ruta  abosluta donde se encuentra nuestra carpeta VIEWS, esto para que segun el sitema operativo, de la ruta acorde y no haya que cambiar ningun acceso

//el metodo join concatena distintos strings; Une todos pathlos segmentos dados utilizando el separador específico de la plataforma como delimitador y luego normaliza la ruta resultante.

//TODO EL PROCESO DE TRAER UNA RUTA ABSOLUTA, ES PARA PODER INDICAR LA RUTA ABSOLUTA AL MOMENTO DE UTILIZAR UN TEMPLATE ENGINE.

const app = express();
app.use("/", indexRoutes);

//traigo mis routes, e indico que mi app la va a usar

//configuracion de motor de plantilla.
app.set("view engine", "ejs");
app.set("views", join(__dinarme, "views")); //concatena la ruta almacenada en __dirname con 'views'
// esto funciona por que index se encuentra en crc, al mismo nivel que la carpeta views; __dinarme consigue la ruta actual, y join lo une con el archivo

// console.log(join(__dinarme, 'views'));todo listo para usar el motor de plantilla

//Servir archivos estaticos
app.use(express.static(join(__dinarme, "public")));
// console.log(join(__dinarme, 'public'))

// middleware de manejo de errores
app.use((err,req, res, next) => {
    console.error(err.stack)
    res.status(404).render("404", { title: "Página 404" });
  });

  //manejador de errores
  // app.use((err, req, res, next) => {
  //   console.error(err.stack)
  //   res.status(404).render('404', {error: "404", description : "something broke" })
  // })

const port = 3000;
app.listen(port, () => {
  console.log(`server on port ${port}`);
});
