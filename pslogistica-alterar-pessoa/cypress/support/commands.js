Cypress.Commands.add('alterarPessoa', (body) => {
  const token = Cypress.env('token');
  const baseUrl = Cypress.env('baseApiUrl');

  return cy.request({
    method: 'PATCH',
    url: `${baseUrl}/alterarPessoa/`,
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    },
    body,
    failOnStatusCode: false
  }).then((response) => {
    return cy.wrap(response).as('response');
  });
});
