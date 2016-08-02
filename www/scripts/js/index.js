$(document).ready(function() {
  if (storage.getItem("api_key") === null) {

    load_form_page();
    initMap();
    addListenerForSignUp();
  }
  else {
    load_game_page();
    initMap();
    match_height_maps();
  }
}); // end onDeviceReady
