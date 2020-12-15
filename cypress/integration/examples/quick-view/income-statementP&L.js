describe("User & permission management ", () => {
  it("has active class li ", () => {
    // login first
    // after redirect to dashborad
    cy.visit("https://staging.km-dashboard.de");
    cy.get(".login_username")
      .type("fe-autotest")
      .should("have.value", "fe-autotest");
    cy.get(".login_password").type("donut764").should("have.value", "donut764");
    cy.get(".login_btn").click();

    cy.visit(
      "https://staging.km-dashboard.de/erfolgsrechnung/A100000/10020/2020/monthly/vorjahr"
    );
    cy.hash().should("eq", "#usermanagement"); // => true

    cy.get(".sidebar_menu li").should("length", 0);
    cy.get(".sidebar_menu li").should("have.class", "active");

    // has add user button
    cy.get(".add_user_btn").should("length", 0);
    cy.get(".add_user_btn").click();

    // add user
    cy.get("#userName").type("aaaa");
    cy.log("click add user button");
    cy.get(".add_user_popup_btn").click();

    // add permission
    cy.log("select country");
    cy.get("#country_dropdown").select("DE"); // Select the 'DE' option
    // or .select('2').should('have.value', '2')

    cy.log("select product group");
    cy.get("#pgdropdown").select("COOLING");

    cy.log("click add permisions button");
    cy.get(".add_permission_btn").click({ multiple: true, force: true });

    // delete test user
    cy.log('delete "aaaa" user');
    cy.get("#user_table > tbody > tr")
      .find("td")
      .contains("aaaa")
      .siblings()
      .click();
  });
});
