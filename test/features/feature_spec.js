var casper = require('casper').create();

casper.test.begin('Testy mc testerson', function(test){
    test.assert(true);
    test.done();
})
