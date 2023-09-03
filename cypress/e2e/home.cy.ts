describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  //TUTORIAL-SECTION: this context deals to demonstrate basics
  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      //cy.get("dt").eq(0).contains(/4 courses/i) // making case insensitive
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  //TUTORIAL-SECTION: this context deals with testing with multiple pages
  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click() // gets "course-0" then its children "a" containing context "Get started"
      cy.location("pathname").should("equal", "/testing-your-first-application") // checking if the new opened url matches the option we have selected
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click() // gets "course-1" then its children "a" containing context "Get started"
      cy.location("pathname").should("equal", "/testing-foundations") // checking if the new opened url matches the option we have selected
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click() // gets "course-2" then its children "a" containing context "Get started"
      cy.location("pathname").should("equal", "/cypress-fundamentals") // checking if the new opened url matches the option we have selected
    })
  })
})
