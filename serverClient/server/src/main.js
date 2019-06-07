const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')

    const data = [
        {
            naslov: 'Ovo je naslov jedam',
            text: "sadasdklashdkashkjsahdkjfhksjad fsda"
        },
        {
            naslov: 'Ovo je naslov dva',
            text: "sadasdkdkjfhksjad fsda"
        },
        {
            naslov: 'Ovo je naslov tri',
            text: "sdssfsfsdf"
        },
        {
            naslov: 'Ovo je naslov cetri',
            text: "lorem asa fdsafdsgdsgfd dgdf  hdf fh fhd fd jh jgjgfjg j"
        },
        {
            naslov: 'Ovo je naslov pet',
            text: "sdssfsfsdf"
        },
        {
            naslov: 'Ovo je naslov sest',
            text: "sdssfsfsdf"
        }

    ]

    res.end(JSON.stringify(data))
});

server.listen(port, hostname, () => {
    console.log('Server Running');
})