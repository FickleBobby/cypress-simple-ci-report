describe('Google success search', () => {
    
    it('Successfully loads Google.co.uk', () => {
        cy.visit('https://www.google.co.uk') 
    })

    it('Search for a video', () => {
        cy.get('[name="q"]')
        .type('never gonna give you up youtube')
        .should('have.value', 'never gonna give you up youtube')
        .type('{enter}')
    })
  })
