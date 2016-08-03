

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

function getMonsters() {

  return $.ajax({
    headers: {
      "Authorization": "Token token=" + storage.getItem("api_key")
    },
    url: ajax_enemies_path,
    // data: dataText,
    type: "GET",
    success: function(data) {
        monsterArray = data;
        console.log("this is the monster request - sucess");
        console.log(data);
     },
     error: function(data) {
       console.log("this is the monster request - failure");
       console.log(data);
     }
  });

}

function getCurrentMonsterInfo(id) {

  return $.ajax({
    headers: {
      "Authorization": "Token token=" + storage.getItem("api_key")
    },
    url: ajax_enemies_path + id,
    // data: dataText,
    type: "GET",
    success: function(data) {
        currentMonsterArray = data;
        console.log("current monster request - sucess");
        // console.log(currentMonsterArray);
     },
     error: function(data) {
       console.log("current monster request - failure");
       console.log(data);
     }
  });

}


function pushLocation(position) {
  return $.ajax({
    headers: {
      "Authorization": "Token token=" + storage.getItem("api_key"),
      "USER_LATITUDE": position.coords.latitude.toString(),
      "USER_LONGITUDE": position.coords.longitude.toString()
    },
    type: 'PUT',
    url: ajax_users_path + storage.getItem("userid"),
  }).done(function() {
      console.log("success - location pushed");
      // callback();
  }).fail(function() {
      console.log("fail");
  }).always(function() {
      console.log("complete");
  });
}
