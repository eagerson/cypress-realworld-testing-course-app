# Cypress Fundamentals

- How to write a test
Follow AAA framework
- Cypress runs in the browser
Anything the browser can access, Cypress can as well
- Command Chaining
    
    Cypress chains commands together using a Promise mechanism. Each command yields a 'subject' to the next one until the chain concludes or encounters an error.
    cy.clearCookies() yields null, so it cannot be chaines
    
- Understanding the Asynchronous nature of Cypress

```jsx
// THIS WILL NOT WORK
const button = cy.get("button") // avoid variables in cypress tests except for data

button.click()
```

- Waiting & Retry-ability
    - Retry-ability & Flake resistance
    Cypress has built-in retry-ability, which means it automatically waits for actions to complete. Unlike other tools that use "hard" waits, Cypress understands what's happening in your app. It knows when pages load, events occur, or elements animate and waits accordingly. It even pauses during page transitions until the new page fully loads, making testing more reliable and flake-resistant
    - Aliases
    Use Aliases to reference elements, requests, or intercepts across our tests.
    
    ```jsx
    // Create an alias using the `as()` Cypress Command
    cy.get("table").find("tr").as("rows")
    
    // Reference Cypress Alias `rows`
    cy.get("@rows")
    ```
    
    - Explicit Waits
    
    ```jsx
    describe("User Sign-up and Login", () => {
      beforeEach(() => {
        cy.request("POST", "/users").as("signup") // creating the signup alias
      })
    
      it("should allow a visitor to sign-up, login, and logout", () => {
        cy.visit("/")
        // ...
    
        cy.wait("@signup") // waiting upon the signup alias
    
        // ...
      })
    })
    ```
    
- How to Debug Failing Tests
    - Cypress UI: figure out what went wrong with your tests
    - Logging: use cy.log() the other is to use console.log()
    - Browser Dev Tools: use the same techniques used with web app to debug your failing Cypress tests too.
- Cypress is Just JavaScript
    - Cypress uses loadash by default