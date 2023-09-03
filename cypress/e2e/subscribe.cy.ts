describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    const email = "tom@aol.com"

    cy.getByData("email-input").type(email) // grab the email input box and type email
    cy.getByData("submit-button").click() // click on submit button
    cy.getByData("success-message").should("exist").contains(email) // check if success message is shown for the provided email
  })
})
