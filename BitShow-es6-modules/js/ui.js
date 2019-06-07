var ui = (function () {
    var $row = document.querySelector('.result');

    function renderShows(shows, search) {
        shows.forEach(function (show) {
            var cardTemplate = "" +

                '<div class="col-4">' +
                '<div class="card">' +
                '<img src="' + show.image.medium + '" class="card-img-top" alt="...">' +
                '<div class="card-body">' +

                '<h5 class="card-title" id ="' + show.id + '"> ' + show.name + '</h5>' +
                '</div>' +
                '</div>' +
                '</div>';


            $row.innerHTML += cardTemplate;
        })

        $('h5').click(function () {

            var a = this.id;


            search(a)
        })

    }
    function renderNewPage(data) {
        console.log(data);

        $row.innerHTML = '';
        var cast = data._embedded.cast;
        var castNamelist = '';

        for (var i = 1; i < cast.length; i++) {

            castNamelist += '<li>' + (cast[i].person.name) + '</li>';
        }
        var season = 0;
        var seasonDate = '';
        var seasonList = data._embedded.seasons;
        for (var i = 1; i < seasonList.length; i++) {
            seasonDate += '<li>' + (seasonList[i].premiereDate) + '   ' + (seasonList[i].endDate) + '</li>';
            console.log(seasonDate);
            season++;

        }

        var cardTemplate2 = "" +
            `  <div class="container">
        <h1 class = 'movieTitle'>${data.name}</h1>

        <div class="row">
            <div class="col-md-8"><img class = 'newPic' src = ${data.image.medium}></div>
            <div class="col-md-4">
                <h3>Seasons(${season})</h3>
                <ul>
                     ${seasonDate}
                </ul>
                <h3>Cast</h3>
                <ul>
                    ${castNamelist}
                </ul>
            </div>
        </div>

        <h3>Show Details</h3>

        <p>${data.summary}</p>
    </div>`


        $row.innerHTML = cardTemplate2;

    }


    return {
        renderShows: renderShows,
        renderNewPage: renderNewPage,

    }

})();