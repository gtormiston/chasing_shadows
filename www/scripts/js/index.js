$(document).ready(function() {
  if (storage.getItem("api_key") == false) {

    load_form_page();
    addListenerForSignUp();
    initMap();
  }
  else {
    load_game_page();
    initMap();
    match_height_maps();
  }
}); // end onDeviceReady
