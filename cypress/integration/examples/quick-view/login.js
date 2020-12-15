describe("Login page: ", () => {
  it("loads page: ", () => {
    cy.visit("https://staging.km-dashboard.de");
    cy.title("impro");

    // after redirect to dashborad
    cy.visit("https://staging.km-dashboard.de");
    cy.get("#user_name")
      .type("fe-autotest")
      .should("have.value", "fe-autotest");
    cy.get("#pwd").type("donut764").should("have.value", "donut764");

    // check login button
    cy.get("#login_id");
    cy.get("#login_id").click();

    // cy.contains("settings").click();
  });
});
