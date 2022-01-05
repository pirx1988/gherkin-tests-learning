import {click, selectMultiElements, selectSingleElement, selectVisibleText, setText} from "../utils/commands";

class LoginStream {

    private get header() {
        return $('h1');
    }

    private get firstName() {
        return $('[name=firstname]');
    }

    private get lastName() {
        return $('[name=lastname]');
    }

    private get genderRadio() {
        return $$('[name=sex]')
    };

    private get yrsRadio() {
        return $$('[name=exp]')
    };

    private get favChaiCheckbox() {
        return $$('input[name*= Tea]')
    };

    private get whyChaiCheckbox() {
        return $$('input[name=tool]')
    };

    private get selectContinentDropdown() {
        return $('#continents')
    };

    private get multiselectCommand() {
        return $('#selenium_commands')
    };

    private get signInBtn() {
        return $('#sign-in-button')
    };

    public get createNewStreamButton() {
        return $$('#new-stream-button')
    }

    private get nextButton() {
        return $('#identifierNext')
    }

    private get passwordNextButton() {
        return $('#passwordNext');
    }

    private get emailLoginInput() {
        return $('#identifierId');
    }

    private get passwordInput() {
        return $('input[name=password]')
    }

    async clickSignInBtn() {
        await click(this.signInBtn);
    }

    async clickNextButton() {
        await click(this.nextButton);
    }

    async clickPasswordNextButton() {
        await click(this.passwordNextButton);
    }

    async enterLogin(loginEmail: string) {
        await setText(this.emailLoginInput, loginEmail);
    }

    async enterPassword(password: string) {
        await setText(this.passwordInput, password);
    }
}

export default new LoginStream();