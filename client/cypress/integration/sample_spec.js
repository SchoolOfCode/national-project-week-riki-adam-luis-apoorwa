// Tests for our Searcher Component

describe("Open the main portal page", () => {
  it("successfully loads", () => {
    cy.visit("https://agitated-northcutt-ed9a89.netlify.app/");
  });
});

describe("Open page, find searcher element, input css", () => {
  it("successfully inputs css and has value", () => {
    cy.visit("https://agitated-northcutt-ed9a89.netlify.app/");
    cy.get("#Searcher_Input", { timeout: 10000 }).type("Css");
    cy.get("#Searcher_Input").should("have.value", "Css");
  });
});

describe("Search request of CSS returns correct title and topic", () => {
  it("successfully returns WEEK 1 as week title and CSS as week topic", () => {
    cy.visit("https://agitated-northcutt-ed9a89.netlify.app/");
    cy.get("#Searcher_Input", { timeout: 10000 }).type("Css");
    cy.get("#Search_Text_Span", { timeout: 10000 }).click();
    cy.contains("h2", "WEEK 1");
    cy.contains("h2", "CSS");
    cy.contains(
      "li",
      "CSS Diner - A fun game to help you learn and practice CSS selectorsLink"
    );
    cy.contains("li", "Css basicsLink");
  });
});
