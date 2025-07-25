// seu teste.spec.js
describe('Alterar Pessoa - PATCH', () => {
  it('Deve alterar os dados de uma pessoa com sucesso', () => {
    const payload = {
      razao_social: "Gabriel Tes",
      nome_fantasia: "TESTE HNK",
      cnpj_cpf: "80737282061",
      insc_est: "ISENTO",
      email: "gbieldev@hotmail.com",
      telefone: "(11) 3173-1770",
      sigla_cliente: "HNK",
      ativo: true
    };

    cy.alterarPessoa(payload);

    cy.get('@response').then((res) => {
  expect(res.status).to.eq(200);
  expect(res.body).to.have.property('status', 'success');
  expect(res.body).to.have.property('message', 'Alteração de pessoa realizado com sucesso.');
});
  });
});
