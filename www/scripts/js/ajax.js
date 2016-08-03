

function sendUserAjax (configuration, callback) {
  $.ajax({
    url: configuration.url,
    data: configuration.data,
    type: configuration.type,
    success: function(data) {
      callback(data);
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
        currentMonster = data;
        console.log("current monster request - sucess");
        // console.log(currentMonsterArray);
     },
     error: function(data) {
       console.log("current monster request - failure");
       console.log(data);
     }
  });

}

function attackCurrentMonster(id) {

  return $.ajax({
    headers: {
      "Authorization": "Token token=" + storage.getItem("api_key")
    },
    url: ajax_enemies_path + id,
    // data: dataText,
    type: "PATCH",
    success: function(data) {
        attackMessage = data;
        console.log("attack - sucess");
        // console.log(currentMonsterArray);
     },
     error: function(data) {
       console.log("attack - failure");
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
