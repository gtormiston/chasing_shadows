describe("Ajax test", function() {
  var dataText = "string";
  it("should make an ajax request to the correct url", function() {
    spyOn($, "ajax");
    sendSignUpRequest(dataText);
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_users_path);
  });
});
