import express from "express";
import explorer from "./routers/explorer-routes.js"; 
import expedition from "./routers/expedition-routes.js";
import species from "./routers/species-routes.js";


const app = express();

app.use(express.json());-
app.use("/explorer", explorer)
app.use("/expedition", expedition)
app.use("/species", species)



app.listen(3000, ()=>{
    console.log(`Rodando na porta 3000`)
})
