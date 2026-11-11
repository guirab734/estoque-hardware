export function validarProduto({ nome, quantidade, preco } = {}) {
  if (typeof nome !== 'string' || nome.trim().length < 3) {
    return { ok: false, status: 400, erro: 'O nome do produto precisa ter pelo menos 3 caracteres.' };
  }
  const quantidadeValida = typeof quantidade === 'number' || (typeof quantidade === 'string' && quantidade.trim() !== '');
  const precoValido = typeof preco === 'number' || (typeof preco === 'string' && preco.trim() !== '');
  if (!quantidadeValida || !Number.isInteger(Number(quantidade)) || Number(quantidade) < 0) {
    return { ok: false, status: 422, erro: 'A quantidade precisa ser um número inteiro não negativo.' };
  }
  if (!precoValido || !Number.isFinite(Number(preco)) || Number(preco) < 0) {
    return { ok: false, status: 422, erro: 'O preço precisa ser um número não negativo.' };
  }
  return { ok: true };
}
