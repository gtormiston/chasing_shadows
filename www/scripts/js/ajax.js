function getMonsters() {

$.ajax({
  headers: {
    "Authorization": "Token token=" + storage.getItem("api_key")
  },
  url: ajax_enemies_path,
  // data: dataText,
  type: "GET",
  success: function(data) {
      monsterArray = data;
      console.log("this is the monster request - sucess");
      console.log(data);
   },
   error: function(data) {
     console.log("this is the monster request - failure");
     console.log(data);
   }
});
}
