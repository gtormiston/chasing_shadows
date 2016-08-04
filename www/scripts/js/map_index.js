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
                                  draggable: true,
                                  disableDefaultUI: true
                                });
    map.setOptions({styles: styles});

    $.when(pushLocation(position)).then(function() {
      $.when(getMonsters()).then(function() {
          drawMonsters(map);
      });
    });
    monitorLocation(map);
  }


  var locationPromise = getGeoLocationPromise();
  locationPromise.then(function(position) {
    drawMap(position);
  });
  animatedGuy();
} ///////////// close initMap


  // method to be executed;
  function drawMonsters(map) {
    for( i = 0; i < markerArray.length; i++ ) {
      markerArray[i].setMap(null);
    }

    console.log("monsters cleared"); // remove markers and repopulate when moving?
    for( i = 0; i < monsterArray.length; i++ ) {
      var latlng = new google.maps.LatLng(monsterArray[i].lat, monsterArray[i].lng);
      overlay = new CustomMonsterMarker(
        latlng,
        map,
        {
          marker_id: monsterArray[i].id
        }
      );
      markerArray.push(overlay);
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

    $.when(pushLocation(position)).then(function() {
      $.when(getMonsters()).then(function() {
          drawMonsters(map);
          // playerMarker.setPosition(newCenter);
      });
    });

    // $('.playerMarker').rotate({ endDeg:180, persist:true });
    // $('.playerMarker').rotate({ endDeg: position.coords.heading, duration:0.8, easing:'ease-in', persist: true });
    // animatedGuy();
  }
  function failure() {
    console.error("unable to update position");
  }
}
