describe('Alteração de Produto - API', () => {
  it('Deve alterar um produto com sucesso', () => {
    const payload = {
"codigo_pier": "xxxxxxx",
"descricao": "xxxxxxxx",
"sigla_cliente": "xxxxx",
"estoque_minimo": "xxxxx"
};
    cy.alterarProduto(payload).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'success');
      expect(response.body).to.have.property('message').and.include('sucesso');
    });
  });
});
