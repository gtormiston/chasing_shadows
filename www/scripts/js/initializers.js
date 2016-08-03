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

// function addListenerForLogin() {
//   $("#sign_in_link").on("touchstart click", function(){
//     console.log("sign-in page button clicked");
//     load_sign_in_page(addListenerForLogin);
//   });
// }

function addListenerForSignUp() {
  $("#sign_in_link").on("touchstart click", function(){
    console.log("sign-in page button clicked");
    load_sign_in_page(addListenerForSignIn);
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

function addListenerForSignIn() {

  $('#sign_in_form').submit(function(event) {
    event.preventDefault();
    var username = $("#username").val().toString();
    var password = $("#password").val().toString();

    dataText = "user[name]=" + username +
               "&user[password]=" + password;

    sendSignInRequest(dataText);
  });
}
