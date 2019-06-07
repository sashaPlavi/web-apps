const divContainer = document.querySelector('.container')

function render(data) {

    data.forEach(function (text) {
        console.log(text);

        const te = `
            <div class= 'part'>
                <h3 class ='naslov'>${text.naslov}</h3>
                <p class = text>${text.text}</p>
            </div>`;

        divContainer.innerHTML += te;

    })
}

export {
    render
}