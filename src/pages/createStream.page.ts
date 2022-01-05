import {click, findHeaderWithText, setText} from "../utils/commands";
import {ElementArray} from "webdriverio/build/types";
import StreamsPage from "./StreamsPage";

class CreateStreamPage extends StreamsPage {

    private get createNewStreamButton() {
        return $('#new-stream-button')
    }

    async clickCreateNewStreamButton() {
        await click(this.createNewStreamButton);
    }

    async findCreatedTitle(text: string) : Promise<ElementArray> {
        return await findHeaderWithText('h4', text);
    }

    async findCreatedDescription(text: string) : Promise<ElementArray>{
        return (await findHeaderWithText('h6', text));
    }
}

export default new CreateStreamPage();

