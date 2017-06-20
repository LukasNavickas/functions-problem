const functions = require('firebase-functions');
const request = require('request');
const cheerio = require("cheerio")

exports.helloWorld = functions.https.onRequest((req, res) => {

    request('https://news.ycombinator.com', function (error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        var count = 0;
        $('span.comhead').each(function(i, element){
            count++;
            if (count == 2) { res.send('count is 2') }
        });
    } else {
        res.send('error');
    }
    });

});
