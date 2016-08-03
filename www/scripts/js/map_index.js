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
    // var myLatlng = new google.maps.LatLng(position.coords.latitude,
                                          //  position.coords.longitude);
    // playerMarker = new CustomMarker(
    //   myLatlng,
    //   map,
    //   {
    //     marker_id: '123'
    //   }
    // );
    //
    // animatedGuy();
    // console.log(animatedGuy());
    // // $(".marker").animateSprite('play', 'walkDown');
    pushLocation(position, getMonsters, map);

    drawMonsters(map);

    map.setOptions({styles: styles});

    monitorLocation(map);

    // var monster2 =  getMonsters();
    // var monsters = [
    //   ['Alysterius', 51.51964, -0.07535],
    //   ['Tim the Terrible', 51.5157, -0.0746],
    // ];



    // var monsterIcon = {
    //   url: "/img/wingedmonster.png", // url
    //   scaledSize: new google.maps.Size(60, 60), // scaled size
    //   origin: new google.maps.Point(0,0), // origin
    //   anchor: new google.maps.Point(0, 0)
    // };




    // var charIcon = {
    //     url: "/img/walkingman.gif", // url
    //     scaledSize: new google.maps.Size(50, 50), // scaled size
    //     origin: new google.maps.Point(0,0), // origin
    //     anchor: new google.maps.Point(0, 0) // anchor
    // };
    //
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
  animatedGuy();

} // close initMap


function drawMonsters(map) {
  for( i = 0; i < monsterArray.length; i++ ) {
    var pos = new google.maps.LatLng(monsterArray[i].lat, monsterArray[i].lng);
    console.log(pos);
    monsterOverlay = new CustomMonsterMarker(
      pos,
      map,
      {
        marker_id: monsterArray[i].id
      }
    );
    console.log(monsterOverlay);

    // monsters[i] = new google.maps.Marker({
    //   position: pos,
    //   map: map,
    //   icon: monsterIcon
    // });
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

    pushLocation(position, getMonsters); // updates location when the position changes
    drawMonsters(map, callback);

    // $('.playerMarker').rotate({ endDeg:180, persist:true });
    // $('.playerMarker').rotate({ endDeg: position.coords.heading, duration:0.8, easing:'ease-in', persist: true });
    // playerMarker.setPosition(newCenter);
    // animatedGuy();

  }
  function failure() {
    console.error("unable to update position");
  }
}
