function getGeoLocationPromise() {
  return new Promise(function(fullfill, reject) {

    navigator.geolocation.getCurrentPosition(success, failure);

    function success(position) {
      fullfill(position);
    }
    function failure(){
      reject(new Error("Unable to get position"));
    }

  });
}
//
// function addListenerForLoginLink() {
//   $("#login_link").on("touchstart click", function(){
//     console.log("navbar login link clicked");
//     load_sign_in_page(addListenerForLogin);
//   });
// }
//
// function addListenerForSignUpLink() {
//   $("#sign_up_link").on("touchstart click", function(){
//     console.log("navbar sign-up link clicked");
//     load_sign_up_page(addListenerForSignUp);
//   });
// }

function addListenerForSignUp() {

  $("#sign_in_link").on("click", function(){
    console.log("login link clicked");
    load_sign_in_page(addListenerForLogin);
  });

  $('#sign_up_form').submit(function(event) {
    event.preventDefault();
    var email = $("#email").val().toString();
    var username = $("#username").val().toString();
    var password = $("#password").val().toString();
    var password_confirmation = $("#password_confirmation").val().toString();

    dataText = "user[email]=" + email +
               "&user[name]=" + username +
               "&user[password]=" + password +
               "&user[password_confirmation]=" + password_confirmation;

    sendSignUpRequest(dataText);

  });
}

function addListenerForLogin() {

  $("#sign_up_link").on("click", function(){
    console.log("navbar sign-up link clicked");
    load_sign_up_page(addListenerForSignUp);
  });

  $('#sign_in_form').submit(function(event) {
    event.preventDefault();
    var username = $("#username").val().toString();
    var password = $("#password").val().toString();

    dataText = "user[name]=" + username +
               "&user[password]=" + password;

    sendSignInRequest(dataText);
  });
}
