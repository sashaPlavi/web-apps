import { sendRequest } from './data.js';
import { render } from './ui.js'
function init() {

    sendRequest()
        .then((data) => {
            render(data);

        })

}


export {
    init
}