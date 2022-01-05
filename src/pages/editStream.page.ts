import StreamsPage from "./StreamsPage";
import {click} from "../utils/commands";

class EditStreamPage extends StreamsPage {
    private get editExistingSteramButton() {
        return $('.edit-stream')
    }

    async clickEditStreamButton() {
        await click(this.editExistingSteramButton);
    }
 }
export default new EditStreamPage();