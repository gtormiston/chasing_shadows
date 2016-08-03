// var casper = require('casper').create();
//define ip and port to web service


casper.test.begin("index page", 8, function suite(test) {

  casper.start("http://localhost:8000/ios/www/index.html", function() {

    test.assertHttpStatus(200);
    test.assertExists('a#login_link', '"Log in" link');
    // test.assertDoesntExist('a#sign_up_link', '"Sign up" link');
    test.assertExists('form#sign_up_form','sign up form exists');
    test.assertExists('input#email','Email input exists');
    test.assertExists('input#username','Username input exists');
    test.assertExists('input#password','Password input exists');
    test.assertExists('input#password_confirmation','Password confirmation input exists');
    test.assertExists('input#submit_button','Submit button');
  });

  casper.run(function() {
    test.done();
  });

});


casper.test.begin("Sign in form", 4, function suite(test) {

  casper.start("http://localhost:8000/ios/www/index.html");

  casper.then(function() {

    this.click('#login_link');
  });


  casper.wait(2000, function() {
    casper.echo(casper.getPageContent());




  // .thenClick('a',function() {
  //
  //   casper.echo(casper.getPageContent());
    // test.assertExists('a#sign_up_link', '"Sign up" link');
    // test.assertExists('form#sign_in_form','Sign in form exists');
    // test.assertExists('input#username','Username input exists');
    // test.assertExists('input#password','Password input exists');
    // test.assertExists('input#submit_button','Submit button');
  });

  casper.run(function() {
    test.done();
  });


});
