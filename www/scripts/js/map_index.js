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
    var myLatlng = new google.maps.LatLng(center);
    overlay = new CustomMarker(
      myLatlng,
      map,
      {
        marker_id: '123'
      }
    );

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

    // var charIcon = {
    //     url: "/img/walkingman.gif", // url
    //     scaledSize: new google.maps.Size(50, 50), // scaled size
    //     origin: new google.maps.Point(0,0), // origin
    //     anchor: new google.maps.Point(0, 0) // anchor
    // };

    // var characterMarker = new google.maps.Marker({
    //  position: map.getCenter(),
    //  icon:  charIcon,
    //  map: map,
    //  optimized: false
    // });



  }

  var locationPromise = getGeoLocationPromise();
  locationPromise.then(function(position) {
    drawMap(position);
  });
} // close initMap



function pushLocation(position) {
  $.ajax({
    headers: {
      "Authorization": "Token token=" + storage.getItem("api_key"),
      "USER_LATITUDE": position.coords.latitude.toString(),
      "USER_LONGITUDE": position.coords.longitude.toString()
    },
    type: 'PUT',
    url: ajax_users_path + storage.getItem("userid"),
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
