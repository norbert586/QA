## Automated Tests:
Written using Cypress in Typescript for both API and UI tests cases.

### API

Has an IT block that goes through the AC. The test creates a new user with a unique email each time to prevent a 400 error for duplicate email. The test then validates the response and saves the ID. The test continues onward to GET the newly saved/created user. A validation is done on that response as well. 

A separate IT block goes through an unhappy scenario where the email is Invalid and validates the response

A final IT block validates using the same email in a POST request to create a new user. 

### UI

Observe the below test case:

Test Plan for Coffee Ordering and Cart Validation
Objective

To ensure that the functionality for adding coffee to carts, placing orders, and viewing the pop-up window operates correctly and as expected.
Test Scenarios
Scenario 1: Verify Adding Coffee to Cart

Objective: Ensure that coffee items can be successfully added to the cart.

Steps:

    Navigate to the coffee selection page.
    Select a coffee type and click to add the quantity.
    Repeat steps 1 and 2 for additional coffee types.
    Navigate to the cart page.

Expected Result:

    The selected coffee types and quantities should be correctly listed in the cart.

Scenario 2: Validate Cart Contents and Totals

Objective: Confirm that the cart page displays all added items and calculates totals accurately.

Steps:

    Add coffee items to the cart as described in Scenario 1.
    Navigate to the cart page.
    Verify that all added coffee types and quantities are listed.
    Add or remove coffees 
    Check the total price calculations in the cart.
    Ensure that all prices match the expected values.


Expected Result:

    The cart page should display all added items with correct quantities and accurate price calculations.

Scenario 3: Verify Pop-Up Window for Order Summary

Objective: Ensure that the pop-up window displays correct order summary details when triggered.

Steps:

    Add coffee items to the cart as described in Scenario 1.
    Hover over the Total button in the bottom right corner
    Inspect the pop-up window to check if it displays the correct coffee types, quantities, and total price.

Expected Result:

    The pop-up window should correctly show all coffee types, quantities, and total price as expected from the cart.

    
The UI Test focuses on the 3rd point. The test visits the page and does some basic validation as this is not a full happy path. It then adds a dynamic amount of a custom coffee type and verifies the total window is all correct.
The test only goes through this one test scenario as described. If the test suite were to be more comprehensive, it would have much deeper cart validation and static check validation. These are all examples of future tests though.
![IMG_7608](https://github.com/user-attachments/assets/cd7d8cdc-be3f-403d-b08c-ef0313f72ed7)


https://github.com/user-attachments/assets/8032c13f-a32e-4e7f-b051-96fa3f58e1a4

