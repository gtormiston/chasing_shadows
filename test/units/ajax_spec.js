describe("Ajax test", function() {
  var dataText = "string";
  it("should make an ajax request to the correct url", function() {
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
