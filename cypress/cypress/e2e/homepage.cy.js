import ProductPageFactory from '../support/productPage'
describe("Add product",()=>{
  const productPage = new ProductPageFactory()
  beforeEach(() => {
    cy.visit('https://demo.nopcommerce.com/')
    cy.viewport('macbook-15')
  })
  it('Kiểm tra thêm mới sản phẩm vào giỏ hàng thành công', () => {
      productPage.clickMenu('Computers')
      productPage.clicksubMenu('Desktops')
      productPage.clickProduct('Build your own computer')
      productPage.selectRam('2 GB')
      cy.wait(1000)
      productPage.selectHDD()
      productPage.quantityProduct('4')
      productPage.addToCart()
      productPage.verifyNameSuccess('The product has been added to your shopping cart')
      productPage.clickShoppingCart()
      productPage.verifyShoppingCart('Build your own computer','RAM: 2 GB','HDD: 320 GB')
      productPage.verifyQuantity('4')
  })
})