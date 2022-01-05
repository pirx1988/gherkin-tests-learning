import {click, setText} from "../utils/commands";

class StreamsPage {
    protected get signInBtn() {
        return $('#sign-in-button')
    };

    protected get nextButton() {
        return $('#identifierNext')
    }

    protected get passwordNextButton() {
        return $('#passwordNext');
    }

    protected get emailLoginInput() {
        return $('#identifierId');
    }

    protected get passwordInput() {
        return $('input[name=password]')
    }

    protected get titleInput() {
        return $("#stream_title");
    }

    protected get descriptionInput() {
        return $("#stream_description");
    }

    private get submitStreamButton() {
        return $('#submit_stream');
    }

    async clickPasswordNextButton() {
        await click(this.passwordNextButton);
    }

    async enterLogin(loginEmail: string) {
        await setText(this.emailLoginInput, loginEmail);
    }

    async clickSubmitStreamButton() {
        await click(this.submitStreamButton);
    }


    async enterPassword(password: string) {
        await setText(this.passwordInput, password);
    }

    async enterTitle(Title: string) {
        await setText(this.titleInput, Title);
    }

    async enterDescription(description: string) {
        await setText(this.descriptionInput, description);
    }

    async clickSignInBtn() {
        await click(this.signInBtn);
    }

    async clickNextButton() {
        await click(this.nextButton);
    }
}
export default StreamsPage;