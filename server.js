import express from "express";
import products from "./static/products.js";

const app = express();

app.use(express.json());

const PORT = 3000 || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Pagina principal" });
});

app.get("/sobre", (req, res) => {
  res.status(200).json({ message: "Rota sobre nós" });
});

app.get("/produtos", (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: "Lista de produtos não encontrado." });
  }
});

app.get("/produto/:id", (req, res) => {
  const idProduct = req.params.id;
  const findProduct = products.find((product) => product.id == idProduct);
  try {
    if (findProduct) {
      res.status(200).json(findProduct);
    }
  } catch (error) {
    res
      .status(404)
      .json({ message: "Não foi possível encontrar o produto desejado." });
  }
});

app.listen(PORT, () => console.log(`Servidor funcionando na Porta ${PORT}`));
