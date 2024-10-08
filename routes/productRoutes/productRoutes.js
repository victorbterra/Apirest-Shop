import express from "express"
import products from "../../services/products.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).json({ message: "Pagina principal" });
  });
  
  router.get("/produtos", (req, res) => {
    try {
      res.status(200).json(products);
    } catch (error) {
      res.status(404).json({ message: "Lista de produtos não encontrado." });
    }
  });
  
  router.get("/produto/:id", (req, res) => {
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
  
  export default router;