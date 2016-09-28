export default {
    'should fail when the age is under 13': (client) => {
        const registerPage = client.page.register();

        registerPage
            .navigate()
            .register('Test', 'Test', 'test222@gmail.com', 'matrix', 11)
            .expect.element('@ageLawError').to.be.visible;

        client.end();
    },

    'should open the terms dialog after the user clicks on "Terms of Service"': (client) => {
        const registerPage = client.page.register();

        registerPage
            .navigate()
            .clickTermsOfService()
            .expect.element('@termsDialog').to.be.visible;

        client.end();
    }
};