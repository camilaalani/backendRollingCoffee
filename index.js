import express from "express";
import "dotenv/config" //permite procesar variables de entorno
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import productosRouter from "./src/controllers/routes/productos.routes.js";
import "./src/controllers/routes/database/database.js"
//1 - configurar un puerto
const app = express();

app.set("port", process.env.PORT || 4000 );
app.listen(app.get("port"), ()=>{
    console.log("Estoy en el puerto " + app.get("port"))
})
//2 - configurar los middlewares
app.use(cors()); //permite obtener conexiones remotas
app.use(morgan("dev")); //nos da info extra en la terminal
app.use(express.json()); //interpreta los datos en formto json
app.use(express.urlencoded({extended:true})); //interpreta datos del body del request
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(__filename);
//console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")));

//3 - configurar las rutas
//http://localhost:4001
app.use("/api", productosRouter)
//app.get("/nuevo", (req, res)=>{
    //agregar toda la logica
  //  console.log("procesando una solicitud get");
    //res.send("respuesta del backend RollingCoffee");
//})
