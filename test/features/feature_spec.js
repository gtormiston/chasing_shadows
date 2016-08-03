// var casper = require('casper').create();
//define ip and port to web service


casper.test.begin("index page", 4, function suite(test) {

  casper.start("http://localhost:8000/", function() {

    test.assertHttpStatus(200);
    test.assertExists('#content', "Main content div");
    test.assertExists('form.sign_up_form', "Sign up form");
    test.assertExists('button.sign_in_link', "Sign in button");
    // casper.then(function() {
    //     this.echo('First page:' + this.getTitle());
    // });
    //
    // test.assertEvalEquals(function() {
    //     return __utils__.findOne('h1').textContent;
    //   }, 'Chasing Shadows');

  });




casper.run(function() {
  test.done();
});

});
