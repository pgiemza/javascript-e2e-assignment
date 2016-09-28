const registerCommands = {
    register(firstName, lastName, emailPhone, password, age) {
        return this
            .waitForElementVisible('@firstNameInput')
            .setValue('@firstNameInput', firstName)
            .waitForElementVisible('@lastNameInput')
            .setValue('@lastNameInput', lastName)
            .waitForElementVisible('@emailPhoneInput')
            .setValue('@emailPhoneInput', emailPhone)
            .waitForElementVisible('@emailPhoneRepeatInput')
            .setValue('@emailPhoneRepeatInput', emailPhone)
            .waitForElementVisible('@passwordInput')
            .setValue('@passwordInput', password)
            .waitForElementVisible('@ageInput')
            .setValue('@ageInput', age)
            .waitForElementVisible('@registrationButton')
            .click('@registrationButton')
    },
    clickTermsOfService() {
        return this
            .waitForElementVisible('@termsOfServiceLink')
            .click('@termsOfServiceLink')
    }
};

export default {
    url: 'https://mewe.com',
    commands: [registerCommands],
    elements: {
        firstNameInput: {
            selector: '#reg-first-filled'
        },
        lastNameInput: {
            selector: '#reg-last-filled'
        },
        emailPhoneInput: {
            selector: '#reg-email-phone-filled'
        },
        emailPhoneRepeatInput: {
            selector: '#reg-email-phone-filled-repeat'
        },
        passwordInput: {
            selector: '#reg-password-filled'
        },
        ageInput: {
            selector: '#reg-user-age'
        },
        registrationButton: {
            selector: '#submit-registration'
        },
        ageLawError: {
            selector: '#age-law-err'
        },
        termsOfServiceLink: {
            selector: '#terms-of-service'
        },
        termsDialog: {
            selector: '#terms-dialog'
        }
    }
}