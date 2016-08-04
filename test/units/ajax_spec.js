describe("sendSignUpRequest", function() {
  var dataText = "string";
  it("should make an ajax request to create user", function() {
    spyOn($, "ajax");
    var configuration = {
      url: ajax_users_path,
      type: "POST",
      data: ""
    };
    sendSignUpRequest(configuration, function(){});
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_users_path);
  });


describe("sendSignInRequest", function() {
  var dataText = "string";
  it("should make an ajax request to sign in a user", function () {
    spyOn($, "ajax");
    var configuration = {
      url: ajax_sessions_path,
      type: "POST",
      data: ""
    };
    sendSignInRequest(configuration, function (){});
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_sessions_path);
  });
});

// describe("receive and store user Ajax", function() {
//   var dataText = "string"
//   it("should store the user API, name and email in the local storage", function() {
//     // Need a line to send the ajax JSON back to the method here
//     spyOn($, "ajax");
//     var configuration = {
//       url: ajax_sessions_path,
//       type: "POST",
//       data: { "api_key": 12345 }
//     };
//     expect(storage.getItem("api_key")).toEqual(12345)
//   });
// });



describe("getMonsters", function() {
  it("should make an ajax request to get enemies", function() {
    spyOn($, "ajax");
    getMonsters();
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_enemies_path);
  });
});

describe("getCurrentMonsterInfo", function() {
  it("should make an ajax request to get current enemy", function() {
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
});
