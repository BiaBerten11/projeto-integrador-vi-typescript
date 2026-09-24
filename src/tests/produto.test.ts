import request from "supertest";
import app from "../app";
import { sequelize } from "../models/produto.model";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("CRUD de Produtos", () => {
  it("Deve criar um novo produto", async () => {
    const res = await request(app)
      .post("/produtos")
      .send({ nome: "Teclado Gamer", preco: 250 });

    expect(res.status).toBe(201);
    expect(res.body.nome).toBe("Teclado Gamer");
  });

  it("Deve listar todos os produtos", async () => {
    const res = await request(app).get("/produtos");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("Deve buscar produto por ID existente", async () => {
    const res = await request(app).get("/produtos/1");
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe("Teclado Gamer");
  });

  it("Deve retornar 404 para ID inexistente", async () => {
    const res = await request(app).get("/produtos/999");
    expect(res.status).toBe(404);
  });
});
