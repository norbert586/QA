const baseUrl = 'https://gorest.co.in'

describe('API & UI Automated Testing', () => {
  it('API Spec', () => {
    cy.visit('https://example.cypress.io')
  })
})

function createUser(name:string) {
  cy.request({
    method: 'POST',
    url: `${baseUrl}/public/v2/users`,
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    //   'Content-Type': 'application/json',
    // },
    body: {
      name: 'QA Tester',
      email: '',
      gender: '',
      status: '',
    },
    failOnStatusCode: false, // Prevents Cypress from failing the test on non-2xx status codes
  }).then((response) => {

  })
}