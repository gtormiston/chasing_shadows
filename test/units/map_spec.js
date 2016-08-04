// False positives: I'm pretty sure these tests aren't really passing.

describe('Map', function(){

  // beforeEach(
  //   // mock getGeoLocationPromise
  // )

  it('testing promises example', function(){
    // var promise = getGeoLocationPromise();
    getGeoLocationPromise().then(function() {
      // Promise is resolved
      expect(initMap()).toHaveBeenTriggered();
      done(new Error('Promise should not be resolved'));
    }, function(reason) {
      // Promise is rejected
      expect(initMap()).toHaveBeenTriggered();
      // You could check rejection reason if you want to
      done();
    });
  })

  it('draws the map after getting the geolocation from the device', function(){
    // initMap = jasmine.createSpy();
    expect(getGeoLocationPromise()).t

    getGeoLocationPromise().then(function() {
      expect(initMap()).toHaveBeenTriggered();
      expect(drawMap()).toHaveBeenTriggered();
    })
      // console.log(getGeoLocationPromise())
  })

  it('should trigger pushing the user\'s location to the server', function(){

    var position = (51.51,-0.07);

    $.when(initMap()).then(function() {
      expect(pushLocation(position)).toHaveBeenTriggered();
    })
  })
  it('should insert a google map into the #google_map div', function(){
    $.when(initMap()).then(function() {
      expect(document.getElementById("google_map")).toHaveBeenTriggered();

    })
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
