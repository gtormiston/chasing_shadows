
function sendSignUpRequest(dataText) {
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
}


function sendSignInRequest(dataText) {
  $.ajax({
    url: ajax_sessions_path,
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
}
