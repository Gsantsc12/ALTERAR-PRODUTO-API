describe('Alteração de Produto - API', () => {
  it('Deve alterar um produto com sucesso', () => {
    const payload = {
"codigo_cliente": "12345U",
"codigo_fornecedor": "12345U",
"descricao": "Teste de Caixa 1",
"controle_serie": false,
"controle_validade": false,
"controle_imei": false,
"controle_numero_ativo": false,
"sigla_cliente": "HNK"
};
    cy.alterarProduto(payload).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'success');
      expect(response.body).to.have.property('message').and.include('sucesso');
    });
  });
});
