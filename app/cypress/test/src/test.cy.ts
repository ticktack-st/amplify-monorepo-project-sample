describe('The Home Page', () => {
  it('successfully loads', () => {
    // (baseUrl)/ => http://web:8080/にアクセス
    cy.visit('/')
    // h1タグを取得
    cy.get('h1')
      // 中身がhello worldであることを確認
      .should('not.include.text', 'hello')
  })
})
