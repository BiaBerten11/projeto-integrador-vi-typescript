import { IProduto } from "../interfaces/produto.interface";
import { ProdutoModel } from "../models/produto.model";

export interface IProdutoRepository {
  listar(): Promise<IProduto[]>;
  buscarPorId(id: number): Promise<IProduto | null>;
  criar(produto: IProduto): Promise<IProduto>;
}

export class ProdutoRepository implements IProdutoRepository {
  async listar(): Promise<IProduto[]> {
    return await ProdutoModel.findAll();
  }

  async buscarPorId(id: number): Promise<IProduto | null> {
    return await ProdutoModel.findByPk(id);
  }

  async criar(produto: IProduto): Promise<IProduto> {
    return await ProdutoModel.create(produto as any);
  }
}
