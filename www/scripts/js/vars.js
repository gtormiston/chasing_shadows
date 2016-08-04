/* Vars */
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var enviroment = getParameterByName('env');
storage = window.localStorage;
if(enviroment === 'dev') {
  ajax_users_path = "http://localhost:3000/api/v1/users/";
  ajax_enemies_path = "http://localhost:3000/api/v1/enemies/";
  ajax_sessions_path = "http://localhost:3000/api/v1/sessions/";
} else {
ajax_users_path = "http://chasingshadowsapi.herokuapp.com/api/v1/users/";
ajax_enemies_path = "http://chasingshadowsapi.herokuapp.com/api/v1/enemies/";
ajax_sessions_path = "http://chasingshadowsapi.herokuapp.com/api/v1/sessions/";
}
 // name + password
monsterArray = [];
markerArray = [];
