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
