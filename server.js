import express from "express";
import publicRoutes from "./routes/productRoutes/productRoutes.js"

const app = express();
const PORT = 3000 || 5000;

app.use(express.json());

app.use(publicRoutes)

app.listen(PORT, () => console.log(`Servidor funcionando na Porta ${PORT}`));
