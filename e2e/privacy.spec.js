export default {
    'the privacy page exists, is accesible and there is displayed "SIGN UP FOR FREE!" button': (client) => {
        const privacyPage = client.page.privacy();

        privacyPage
            .navigate()
            .waitForElementVisible('body')
            .expect.element('@signUpButton').text.to.contain('SIGN UP FOR FREE!');

        client.end();
    }
};