import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/produto.repository";

const repo = new ProdutoRepository();

export const listar = async (req: Request, res: Response) => {
  const produtos = await repo.listar();
  return res.json(produtos);
};

export const buscarPorId = async (req: Request, res: Response) => {
  const produto = await repo.buscarPorId(Number(req.params.id));
  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }
  return res.json(produto);
};

export const criar = async (req: Request, res: Response) => {
  const { nome, preco } = req.body;
  const novo = await repo.criar({ nome, preco });
  return res.status(201).json(novo);
};
