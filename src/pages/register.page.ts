import Page from "./page";
import {click, selectMultiElements, selectSingleElement, selectVisibleText, setText} from "../utils/commands";

class ChaiRegister extends Page {

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

    private get submitBtn() {
        return $('#submit')
    };

    getHeader() {
        return this.header;
    }

    async selectElement(element: WebdriverIO.ElementArray, value: string) {

        for (let i = 0; i < element.length; i++) {
            const elementValue = await (element[i].getAttribute('value'));
            if (elementValue === value) {
                await (element[i]).click();
                break;
            }
        }
    }

    /// element - wszystkie opcje
    async selectMultiElements(element: WebdriverIO.ElementArray, checkValues: string[]) {

        for (let i = 0; i < element.length; i++) {
            const elementValue = await (element[i].getAttribute('value'));
            if (checkValues.includes(elementValue)) {
                await (element[i]).click();
            }
        }
    }

    async enterFirstName(firstName: string) {
        // await (await this.firstName).setValue(firstName);
        await setText(this.firstName, firstName);
    }

    async enterLastName(lastName: string) {
        await setText(this.lastName, lastName);
    }

    async selectGender(gender: string) {
        await selectSingleElement(this.genderRadio, gender);
    }

    async selectYrsRadio(yrs: string) {
        await selectSingleElement(this.yrsRadio, yrs);
    }

    async selectFavChaiCheckbox(favChai: string) {

        await selectMultiElements(this.favChaiCheckbox, favChai);
    }

    async selectWhyChaiCheckbox(reason: string) {
        await selectMultiElements(this.whyChaiCheckbox, reason);
    }

    async selectContinent(continent: string) {
        await selectVisibleText(this.selectContinentDropdown, continent);
    }

    async selectCommand(command: string) {
        await selectVisibleText(this.multiselectCommand, command);
    }

    async clickOnSubmitBtn() {
        await click(this.submitBtn);
    }
}

export default new ChaiRegister();