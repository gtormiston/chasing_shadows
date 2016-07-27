// var casper = require('casper').create();
//define ip and port to web service


casper.test.begin("index page", 2, function suite(test) {

  casper.start("http://localhost:8000/ios/www/index.html", function() {

    test.assertHttpStatus(200);
    casper.then(function() {
        this.echo('First page:' + this.getTitle());
    });

    test.assertEvalEquals(function() {
        return __utils__.findOne('h1').textContent;
      }, 'Chasing Shadows');

  });




casper.run(function() {
  test.done();
});

});
