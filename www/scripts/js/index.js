$(document).ready(function() {
//     // are we running in native app or in a browser?
//     window.isphone = false;
//     if(document.URL.indexOf("http://") === -1
//         && document.URL.indexOf("https://") === -1) {
//         window.isphone = true;
//     }
//     if( window.isphone ) {
//         document.addEventListener("deviceready", onDeviceReady, false);
//     } else {
//         onDeviceReady();
//     }
// });
//
// function onDeviceReady() {

  load_form_page();
  initMap();
  addListenerForSignUp();



}); // end onDeviceReady
