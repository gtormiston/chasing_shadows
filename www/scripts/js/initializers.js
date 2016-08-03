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

function setStorage(data) {
  storage.setItem("userid", data.id);
  storage.setItem("user_name", data.name);
  storage.setItem("email", data.email);
  storage.setItem("api_key", data.api_key);
}

function ajaxCallback(data) {
  setStorage(data);
  load_welcome_page();
}

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

    var configuration = {data: dataText,
                         url: ajax_sessions_path,
                         type: "POST"};


    sendUserAjax(configuration, callback);

  });
}

function addListenerForSignIn() {

  $('#sign_in_form').submit(function(event) {
    event.preventDefault();
    var username = $("#username").val().toString();
    var password = $("#password").val().toString();

    dataText = "user[name]=" + username +
               "&user[password]=" + password;

    var configuration = {data: dataText,
                         url: ajax_sessions_path,
                         type: "POST"};



    sendUserAjax(configuration, ajaxCallback);

  });
}
