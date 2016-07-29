// var latitude = "51.510539";
// var longitude = "-0.017854";
//
// function initMap() {
//
//   function getGeoLocationPromise() {
//
//     return new Promise(function(fullfill, reject) {
//       navigator.geolocation.getCurrentPosition(success, failure);
//
//       function success(position) {
//         fullfill(position);
//       }
//
//       function failure(){
//         reject(new Error("Unable to get position"));
//       }
//
//     });
//   }
//   function drawMap(position){
//     var center = position.coords;
//     var mapDiv = document.getElementById("google_map");
//     var map = new google.maps.Map(mapDiv, { center: {lat: center.latitude, lng: center.longitude}, zoom: 8 });
//   }
//   var locationPromise = getGeoLocationPromise();
//   locationPromise.then(function(position) {
//     drawMap(position);
//   });
// }
