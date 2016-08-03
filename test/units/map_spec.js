describe('initMap', function(){

  it('should get the geolocation from the device', function(){
    // geolocation promise
    $.when(getGeoLocationPromise()).then(function() {
      initMap();
    })
  })
  xit('should push the user\'s location to the server', function(){
    // pushLocation
  })
  xit('should insert a google map into the #google_map div', function(){
    // drawMap?
  })
  xit('should get an array of monsters in the area', function(){
    // getMonsters
  })
  xit('should insert a main character marker', function(){
    //
    // animatedGuy
  })
  xit('should update the location', function(){
    // monitorLocation
  })


});
