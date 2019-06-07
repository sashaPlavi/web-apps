var controller = (function (data, ui) {
    function ourFun(shows) {
        ui.renderShows(shows, search)


    }

    function moreInfo(info) {

        ui.renderNewPage(info);
    }


    function search(a) {

        data.request(a, moreInfo)



    }

    data.popularShow(ourFun);


})(data, ui)