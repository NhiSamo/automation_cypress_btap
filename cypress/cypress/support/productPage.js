var productUI = require('../interfaces/productUI')
export default class productPage{
    clickMenu(nameMenu){
        cy.get(productUI.pathMenu).contains(nameMenu).click({force:true})  
    }
    clicksubMenu(nameSubMenu){
        cy.get(productUI.pathMenu).contains(nameSubMenu).click({force:true}) 
    }
    clickProduct(nameProduct){
        cy.wait(2000).get(productUI.clickProduct).contains(nameProduct).click({force:true})
    }
    selectRam(nameSelect){
        cy.get(productUI.clickSelectRam).select('3')
        cy.get(productUI.selectRam).contains(nameSelect).click({force:true})
    }
    selectHDD(){
        cy.get(productUI.selectHDD).click()
        
    }
    quantityProduct(quantity){
        cy.get(productUI.quantityProduct).clear().type(quantity)
    }
    addToCart(){
        cy.get(productUI.addToCart).click()
    }
    verifyNameSuccess(nameVerify){
        cy.wait(1000)
        cy.get(productUI.verify).should('have.contain',nameVerify)
    }
    verifyShoppingCartName(nameVerify){
        cy.get(productUI.verifyShoppingCartName).should('have.contain',nameVerify)
    }
    verifyInformation(nameVerify){
        cy.get(productUI.verifyInformation).should('have.contain',nameVerify)
    }
    verifyQuantity(quantity){
        cy.get(productUI.quantity).should('have.value',quantity)
    }
    clickShoppingCart(){
        cy.get(productUI.shoppingCart).contains('shopping cart').click({force:true})
    }
    
}