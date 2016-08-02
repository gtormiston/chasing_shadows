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
    // console.log(pushLocation(position));

    $.when(pushLocation(position)).then(function( x ) {
      console.log( "Location Pushed and Promised" );
      getMonsters();
    });

    $.when(getMonsters()).then(function( x ) {
      console.log( "Get Monsters complete" );
      drawMonsters(map);
    });

    $.when(drawMonsters()).then(function( x ) {
      console.log( "Monsters drawn" );
    });


    // $.when(getMonsters()).then(function( x ) {
    //   console.log( "Get Monsters complete" );
    // });


    // pushLocation(position);
    // getMonsters();
    // drawMonsters(map);

  //   $( pushLocation(position) ).promise().done(function() {
  //   $( getMonsters() ).append( " Finished! " );
  // });


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
