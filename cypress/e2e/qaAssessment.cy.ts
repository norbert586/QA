import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://gorest.co.in';
const accessToken = '91280494bea4056fdf8f2a7bade3d4218d6ac14fb53430f21b6ee42a87173711'; 

describe('API & UI Automated Testing', () => {
  it('API Spec - Happy Path', () => {
    createUser('Norbert Ratiu').then((response) => {
      // POST Response Validation
      expect(response.status).to.eq(201);
      expect(response.body.id).to.exist;      
      const userId = response.body.id;
      const name = response.body.name;
      const email = response.body.email;
      expect(response.body.gender).to.not.be.empty;
      expect(response.body.status).to.not.be.empty;
      cy.log(`-----USER ID-----: ${userId}`);
      cy.log(`Response Body: ${JSON.stringify(response.body, null, 2)}`);
      cy.log(`Getting Loan User: ${userId}`);
      getUser(userId).then((response) => {
        expect(response.body.id).to.eq(userId);
        expect(response.body.name).to.eq(name);
        expect(response.body.email).to.eq(email);
        expect(response.body.gender).to.not.be.empty;
        expect(response.body.status).to.not.be.empty;
      });
    });
  });
  it.only('API Spec - Sad Path', () => {
    createUser('Bad User','Bad Email').then((response) => {
      // POST Response Validation
      expect(response.status).to.be.greaterThan(399);
      expect(response.body[0].message).to.include('is invalid');
      cy.log(`Response Body: ${JSON.stringify(response.body, null, 2)}`);
    });
  });
});


function createUser(name: string, email?: string) {
  // Use provided email or generate a unique one
  const emailAddress = email || (() => {
    const [firstName, lastName] = name.toLowerCase().split(' ');
    const uniqueString = uuidv4();
    return `${firstName}_${lastName}_${uniqueString}@example.test`;
  })();

  // Return the cy.request to allow chaining
  return cy.request({
    method: 'POST',
    url: `${baseUrl}/public/v2/users`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: {
      name: name,
      email: emailAddress,
      gender: 'male',
      status: 'active',
    },
    failOnStatusCode: false,
  });
}

function getUser(userId: string) {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/public/v2/users/${userId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,
  });
}

