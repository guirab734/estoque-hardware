import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validarProduto } from './validar-produto.js';
test('aceita números e valores numéricos dos campos do formulário', () => {
  assert.equal(validarProduto({ nome: 'Memória RAM', quantidade: 3, preco: 200 }).ok, true);
  assert.equal(validarProduto({ nome: 'Memória RAM', quantidade: '0', preco: '0' }).ok, true);
});
test('rejeita nomes com tipos inesperados sem lançar exceção', () => {
  for (const nome of [123, {}, null, '', 'a']) assert.equal(validarProduto({ nome, quantidade: 1, preco: 2 }).ok, false);
});
test('rejeita quantidade inválida e preço vazio ou não finito', () => {
  for (const quantidade of ['abc', '', null, true, [], 1.5, -1, Infinity]) assert.equal(validarProduto({ nome: 'Memória', quantidade, preco: 2 }).ok, false);
  for (const preco of ['abc', '', null, true, [], -1, Infinity]) assert.equal(validarProduto({ nome: 'Memória', quantidade: 1, preco }).ok, false);
});
