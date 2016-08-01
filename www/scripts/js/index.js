var storage = window.localStorage;
console.log(storage)

$( document ).ready(function() {

        // $.ajax({
        //     url: "http://chasingshadowsapi.herokuapp.com/api/v1/users",
        //     headers: {"Authorization": "Token token=uNEARekndorMAybyLcgqNAtt"},
        //     success: function(data) {
        //         console.log(data);
        //     }

        // }).done(function() {
        //     console.log("success");
        // }).fail(function() {
        //     console.log("fail");
        // }).always(function() {
        //     console.log("complete");
        // })

        console.log("form loaded");
        $("#content").html($("#form_page").html());
        $('#sign_up_form').submit(function(event) {
          event.preventDefault();
          console.log("It happened");
          var email = $("#email").val().toString();
          var username = $("#username").val().toString();
          var password = $("#password").val().toString();
          var passwordConfirmation = $("#password_confirmation").val().toString();

          // var data = {user: {email: email,
          //   name: username,
          //   password: password
          // }};

          dataText = "user[email]=" + email + "&user[name]=" + username + "&user[password]=" + password + "&user[password_confirmation]=" + password_confirmation;

          $.ajax({
                url: "http://chasingshadowsapi.herokuapp.com/api/v1/users",
                data: dataText,
                type: "post",

                success: function(data) {
                    console.log(data)
                    storage.setItem("userid", data.id);
                    // storage.removeItem("user_id");
                    storage.setItem("user_name", data.name);
                    storage.setItem("email", data.email);
                    storage.setItem("api_key", data.api_key);
                    console.log(storage);

                    $("#content").html($("#welcome_page").html());
                    $("#google_map").css("height", $(document).height());

                    $("#gameplay_link").on("touchstart click", function(){
                        console.log("button 3 clicked");
                        $("#content").html($("#gameplay_page").html());
                        initMap();
                    });
                }
             });

        });



  }); // closes document ready



  var latitude;
  var longitude;

  function initMap() {
    function drawMap(position){
      var center = position.coords;
      var mapDiv = document.getElementById("google_map");
      var map = new google.maps.Map(mapDiv,
                                  { center: {
                                             lat: center.latitude,
                                             lng: center.longitude
                                            },
                                    zoom: 18,
                                  });
      map.setOptions({styles: styles});
      monitorLocation(map);

    var monsters = [
      ['Alysterius', 51.51964, -0.07535],
      ['Tim the Terrible', 51.5157, -0.0746]
    ];

    var monsterIcon = {
      url: "/img/wingedmonster.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0)
    }

    for( i = 0; i < monsters.length; i++ ) {
      var pos = new google.maps.LatLng(monsters[i][1], monsters[i][2]);
      monsters[i] = new google.maps.Marker({
        position: pos,
        map: map,
        icon: monsterIcon
      });
    }

    var charIcon = {
        url: "/img/walkingman.gif", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


       var characterMarker = new google.maps.Marker({
         position: map.getCenter(),
         icon:  charIcon,
         map: map,
         optimized: false
       });

  }

    var locationPromise = getGeoLocationPromise();
    locationPromise.then(function(position) {
      drawMap(position);
    });
  } // close initMap


function pushLocation(position) {
  $.ajax({
    headers: {
      // "X-HTTP-Method-Override": "PUT",
      "Authorization": "Token token=" + storage.getItem("api_key"),
      "HTTP_USER_LOCATION": {"lat":"50.505050","lng":"0.0000"}

    //  {"lat": position.coords.latitude, "lng": position.coords.longitude }
    },
    type: 'PUT',

    url: "http://chasingshadowsapi.herokuapp.com/api/v1/users/" + storage.getItem("userid"),
    // crossDomain: true,
    dataType: 'json'
    // success: function() {
    //   console.log("success");
    // }
  }).done(function() {
        console.log("success");
    }).fail(function() {
        console.log("fail");
    }).always(function() {
        console.log("complete");
    })
};


function monitorLocation(map) {
  navigator.geolocation.watchPosition(updateSuccess, failure, { enableHighAccuracy: true });

  function updateSuccess(position) {
    console.log("UPDATED");
    var newCenter = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);
    map.panTo(newCenter);
    pushLocation(position); // updates location when the position changes

  }

  function failure() {
    console.error("unable to update position");
  }
}

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




  function onLoad(){
    document.addEventListener("deviceready", onDeviceReady, false);
  }

  function onDeviceReady() {
    // IN THEORY THE GETCURRENTPOSITION SHOULD BE DONE ON DEVICE READY (SO WE SHOULD MAKE SURE OUR PROMISE RUNS ON DEVICEREADY FOR CORDOVA)
    // navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  // function onSuccess(position) {
  //   // your callback here
  // }
  //
  // function onError(error) {
  //   // your callback here
  // }
