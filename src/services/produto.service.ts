const Produto = require('../models/produto.model');

const produtos = [
    new Produto(1, 'Notebook', 6700),
    new Produto(2, 'Mouse', 120)
];

function listar() {
    return produtos;
}

function buscarPorId(id) {
    return produtos.find(produto => produto.id === Number(id));
}

function criar(produto) {
    const novoProduto = new Produto(
        produtos.length + 1,
        produto.nome,
        produto.preco
    );

    produtos.push(novoProduto);

    return novoProduto;
}

module.exports = {
    listar,
    buscarPorId,
    criar
};