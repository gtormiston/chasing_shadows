var player;
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
          // var passwordConfirmation = $("#password_confirmation").val();

          // var data = {user: {email: email,
          //   name: username,
          //   password: password
          // }};

          dataText = "user[email]=" + email + "&user[name]=" + username + "&user[password]=" + password;

          $.ajax({
                url: "http://chasingshadowsapi.herokuapp.com/api/v1/users",
                data: dataText,
                type: "post",

                success: function(data) {
                    console.log(data)
                    storage.setItem("user_id", data.id);
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
      });

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
    monitorLocation(map);

    var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            },
            {
                "invert_lightness": true
            },
            {
                "lightness": "11"
            },
            {
                "gamma": "1.27"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "simplified"
            },
            {
                "invert_lightness": true
            },
            {
                "lightness": "-10"
            },
            {
                "gamma": "0.54"
            },
            {
                "saturation": "45"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "75"
            },
            {
                "lightness": "24"
            },
            {
                "gamma": "0.70"
            },
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "simplified"
            },
            {
                "invert_lightness": true
            },
            {
                "lightness": "-24"
            },
            {
                "gamma": "0.59"
            },
            {
                "saturation": "59"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "invert_lightness": true
            },
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "73"
            },
            {
                "lightness": "-24"
            },
            {
                "gamma": "0.59"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-41"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": "43"
            },
            {
                "lightness": "-16"
            },
            {
                "gamma": "0.73"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "43"
            },
            {
                "lightness": "-11"
            },
            {
                "gamma": "0.73"
            },
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "45"
            },
            {
                "lightness": "2"
            },
            {
                "gamma": "0.67"
            },
            {
                "invert_lightness": true
            },
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            },
            {
                "saturation": "38"
            },
            {
                "lightness": "-16"
            },
            {
                "gamma": "0.86"
            }
        ]
    }
]

map.setOptions({styles: styles});

var icon = {
    url: "/img/walkingman.gif", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};


   var characterMarker = new google.maps.Marker({
     position: map.getCenter(),
     icon:  icon,
     map: map,
     optimized: false
   });

  }

  var locationPromise = getGeoLocationPromise();
  locationPromise.then(function(position) {
    drawMap(position);
  });
}

function monitorLocation(map) {
  navigator.geolocation.watchPosition(updateSuccess, failure, { enableHighAccuracy: true });

  function updateSuccess(position) {
    console.log("UPDATED");
    var newCenter = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);
    map.panTo(newCenter);

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