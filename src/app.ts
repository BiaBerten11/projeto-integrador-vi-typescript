import express from "express";
import produtoRoutes from "./routes/produto.routes";
import { sequelize } from "./models/produto.model";

const app = express();
app.use(express.json());

app.use("/produtos", produtoRoutes);

// Sincroniza o banco de dados
sequelize.sync();

// Adiciona o listen para o servidor responder na porta 3000:
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

export default app;
