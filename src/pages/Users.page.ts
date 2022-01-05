import {click, setText} from "../utils/commands";
import Page from './page'

class UsersPage extends Page {
    private get url_textbox() {return $('#urlvalue');}
    private get url_ajax_btn() {return $('#submitajax');}
    private get url_success_elem() {return $('.alert-success');}
    private get status_text() {return $('#statuspre');}
    private get output_area() {return $('#outputpre');}

    // open browser
    async openApp(pageUrl: string) {
        await browser.url(pageUrl);
        await browser.pause(5000);
    }

    async enterAPIUrl(apiEndpoint: string) {
        await setText(this.url_textbox, apiEndpoint);
    }

    async clickOnAjaxBtn() {
        await click(this.url_ajax_btn);
    }

    async getStatusText(): Promise<string>
    {
        await this.url_success_elem.waitForDisplayed();
        return (await this.status_text).getText();
    }

    async getOutputText() : Promise<string>
    {
        return (await this.output_area).getText();
    }

}

export default new UsersPage();