// var casper = require('casper').create();

casper.test.begin("index page", function(test) {
  casper.start("http://localhost:8000/ios/www/index.html", function() {
    test.assertHttpStatus(200);
    casper.then(function() {
      this.echo('First page:' + this.getTitle());
    });
  });
});



casper.run();
