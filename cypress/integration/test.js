describe('Personal Website', () => {
  beforeEach(function () {
    cy.server()
    cy.visit('/')
    cy.route({
      url: 'www.djdapz-email.com/email',
      method: 'POST',
      response: 'yo'
    }).as('sendEmail')
  })
  it('should let me fill out the form', () => {
    cy.contains('CONTACT').click()

    cy.get('#contact_email').type('joe@joe.joe')
    cy.get('#contact_name').type('Joe joeseph')
    cy.get('#contact_message').type('Hello what\'s good')

    cy.contains('Send Email').click()
    cy.wait('@sendEmail').then(xhr => {
      expect(xhr.requestBody).to.eql({
        to: ['djdapz@aol.com'],
        from: 'joe@joe.joe',
        name: 'Joe joeseph',
        message: 'Hello what\'s good'
      })
    })
  })
})