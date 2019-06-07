var data = (function () {


    function popularShow(callback) {
        $.get('http://api.tvmaze.com/shows', function (data) {

            data.sort(function (a, b) { return (a.rating.average < b.rating.average) ? 1 : -1 })

            callback(data.slice(0, 50));


        })

    }

    function request(a, ctr) {

        $.get(' http://api.tvmaze.com/shows/' + a + '?embed[]=seasons&embed[]=cast ', function (da) {



            ctr(da)
        })



    }





    return {
        popularShow: popularShow,
        request: request,
    }

})();