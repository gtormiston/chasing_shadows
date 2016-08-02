$(document).ready(function() {
//     // are we running in native app or in a browser?
//     window.isphone = false;
//     if(document.URL.indexOf("http://") === -1
//         && document.URL.indexOf("https://") === -1) {
//         window.isphone = true;
//     }
//     if( window.isphone ) {
//         document.addEventListener("deviceready", onDeviceReady, false);
//     } else {
//         onDeviceReady();
//     }
// });
//
// function onDeviceReady() {

  load_form_page();
  initMap();

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

    $.ajax({
      url: ajax_users_path,
      data: dataText,
      type: "POST",
      success: function(data) {
          console.log(data);
          storage.setItem("userid", data.id);
          storage.setItem("user_name", data.name);
          storage.setItem("email", data.email);
          storage.setItem("api_key", data.api_key);

          load_welcome_page();
          match_height_maps();

          $("#gameplay_link").on("touchstart click", function(){
              load_game_page();
              initMap();
          });
       },
       error: function(data) {
         console.log(data);
       }
    });

  });

}); // end onDeviceReady
