$(document).ready(function() {
  // if (storage.getItem("api_key") === null) {

    load_sign_up_page(addListenerForSignUp);
    // addListenerForSignUp();
    addListenerForLoginLink();
    addListenerForSignUpLink();



    // initMap();
  // }
  // else {
  //   load_game_page();
  //   initMap();
  //   match_height_maps();
  // }
}); // end onDeviceReady
