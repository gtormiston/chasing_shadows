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
                                  minZoom: 13,
                                  maxZoom: 19,
                                  draggable: true
                                  // zoomControl: false
                                  // panControl: false
                                });

    map.setOptions({styles: styles});

    // pushLocation(position);

    $.when(pushLocation(position)).then(function(data, textStatus, jqXHR) {
      getMonsters();
    });

    $.when(getMonsters()).then(function() {
        drawMonsters(map);
    });

    monitorLocation(map);
  }

  var locationPromise = getGeoLocationPromise();
  locationPromise.then(function(position) {
    // pushLocation(position);
    drawMap(position);

  });
  animatedGuy();
} ///////////// close initMap


  // method to be executed;
  function drawMonsters(map) {
    // console.log("monsterArray length:")
    // console.log(monsterArray.length);
    for( i = 0; i < monsterArray.length; i++ ) {
      // console.log(monsterArray[i].lat);
      // console.log(monsterArray[i].lng);
      var latlng = new google.maps.LatLng(monsterArray[i].lat, monsterArray[i].lng);
      // console.log(latlng);
      overlay = new CustomMonsterMarker(
        latlng,
        map,
        {
          marker_id: monsterArray[i].id
        }
      )
    }
  }


function monitorLocation(map) {
  console.log("monitorLocation 1");
  navigator.geolocation.watchPosition(updateSuccess, failure, { enableHighAccuracy: true });

  function updateSuccess(position) {
    console.log("UPDATED");
    var newCenter = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);
    map.panTo(newCenter);

    $.when(pushLocation(position)).then(function( x ) {
      console.log( "Location Pushed and Promised v2" );
      getMonsters();
    });

    $.when(getMonsters()).then(function( x ) {
      console.log( "Get Monsters complete v2" );
      drawMonsters(map);
    });

    $.when(drawMonsters()).then(function( x ) {
      console.log( "Monsters drawn v2" );
    });
    // $('.playerMarker').rotate({ endDeg:180, persist:true });
    // $('.playerMarker').rotate({ endDeg: position.coords.heading, duration:0.8, easing:'ease-in', persist: true });
    // playerMarker.setPosition(newCenter);
    // animatedGuy();
  }
  function failure() {
    console.error("unable to update position");
  }
}
