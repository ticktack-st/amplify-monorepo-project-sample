describe('The Home Page', () => {
  it('successfully loads', () => {
    // (baseUrl)/ => http://web:8080/にアクセス
    cy.visit('/login')
    // h1タグを取得
    cy.get('h1')
      // 中身がhelloであることを確認
      .should('include.text', 'hello')
  })
})
