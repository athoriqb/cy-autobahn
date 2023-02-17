class signUpPage {
    get emailField() {return cy.get("input[name=email]")}
    get passwordField() {return cy.get("input[name=password]")}
    get signUpBtn() {return cy.get("div.button-wrapper")}
    get firstNameField() {return cy.get("input[name=first-name]")}
    get lastNameField() {return cy.get("input[name=last-name]")}
    get industryDropdown() {return cy.get("div.toggler.noselect")}
    get countryPhoneDropdown() {return cy.get("div.iti__arrow")}
    get phoneNumberField() {return cy.get("input[name=phone-number]")}
    get startUsingAutobahnBtn() {return cy.get("a[class='btn primary button-large active']")}
    get ResendLinkBtn() {return cy.xpath("//p[@class='button-text paragraph button-large' and text()='Resend Verification Link']")}

    visit() {
        cy.visit("/signup")
    }

    inputInfoData(firstName, lastName, industry, country, phone){
        this.firstNameField.should('be.visible','email already used').type(firstName)
        this.lastNameField.type(lastName)
        this.industryDropdown.click()
        cy.contains('div',industry).click()
        this.countryPhoneDropdown.click()
        cy.contains('span',country).click()
        this.phoneNumberField.type(phone)
    }
}
const signuppage = new signUpPage()
export default signuppage