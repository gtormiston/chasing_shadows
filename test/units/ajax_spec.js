describe("sendUserAjax", function() {
  var dataText = "string";
  it("should make an ajax request to create user", function() {
    spyOn($, "ajax");
    var configuration = {
      url: ajax_users_path,
      type: "POST",
      data: ""
    };
    sendUserAjax(configuration, function(){});
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_users_path);
  });
});

describe("getMonsters", function() {
  it("should make an ajax request to get enemies", function() {
    spyOn($, "ajax");
    getMonsters();
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_enemies_path);

  });

});

describe("getCurrentMonsterInfo", function() {
  it("should make an ajax request to get enemy", function() {
    spyOn($, "ajax");
    var id = 1;
    getCurrentMonsterInfo(id);
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_enemies_path + id);

  });

});

describe("attackCurrentMonster", function() {
  it("should make an ajax request to update enemy", function() {
    spyOn($, "ajax");
    var id = 1;
    getCurrentMonsterInfo(id);
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_enemies_path + id);

  });

});

// describe("pushLocation", function() {
//   it("should make an ajax request to update user", function() {
//     spyOn($, "ajax");
//     var storage = {
//       getItem: {
//         "api_key": "asdasd",
//         "userid": 1
//       }
//     };
//     var position = {
//       coords: {
//         latitude: 1,
//         longitude: 2
//       }
//     };
//     pushLocation(position);
//     expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_users_path + 1);
//
//   });
//
// });
