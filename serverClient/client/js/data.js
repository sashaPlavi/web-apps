
function sendRequest() {
    let request = 'http://localhost:3000/';

    return fetch(request)
        .then(response => response.json())
}

export {
    sendRequest
}
