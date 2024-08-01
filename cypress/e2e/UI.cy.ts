const typesOfCoffee: any[] = ['Espresso','Espresso Macchiato','Cappuccino','Mocha','Flat White','Americano','Cafe Latte','Espresso Con Panna','Cafe Breve']
const coffeePrices: { [key: string]: number } = {
    'Espresso': 10,
    'Mocha': 8,
    'Espresso Macchiato': 12,
    'Cappuccino': 19,
    'Flat White': 18,
    'Americano': 7,
    'Cafe Latte': 16,
    'Espresso Con Panna': 14,
    'Cafe Breve': 15
  };
  

describe('UI Automated Testing - Total Window', () => {
    it('UI Spec - Basic Validation + Add Coffee View Total Window', () => {
      cy.visit('https://coffee-cart.app/', { failOnStatusCode: false })
      //Static Checks
      cy.contains('menu');
      cy.contains('cart');
      cy.contains('github');
      typesOfCoffee.forEach(coffeeType => {
        cy.contains(coffeeType).should('exist');
      });
      //Tabs at Top
      cy.get('ul[data-v-bb7b5941=""] > :nth-child(2)').click();
      cy.contains('No coffee, go add some.');
      cy.get('ul[data-v-bb7b5941=""] > :nth-child(3)').click();
      cy.contains('Star our repository jecfish/coffee-cart. Report in the repository if you found any issues');
      cy.get('ul[data-v-bb7b5941=""] > :nth-child(1)').click();
      addCoffeeAndVerify('Americano',12);
    });
  });

  function addCoffeeAndVerify (coffeeType: string, quantity: number) {
    cy.get(`[data-cy="${coffeeType}"]`).then(($icon) => {
        for (let i = 0; i < quantity; i++) {
          cy.wrap($icon).click(); // Click the icon to add coffee
        }
      });

    const price = coffeePrices[coffeeType];
    const expectedTotal = quantity * price;

    cy.get('[data-test="checkout"]').trigger('mouseover');
    cy.contains(`${coffeeType} x ${quantity}`);
    cy.contains(`Total: $${expectedTotal.toFixed(2)}`);
  };

  