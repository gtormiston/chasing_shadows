describe("Main character marker", function() {
  it("It should trigger the character marker", function() {
    // expect(Page.content).toBeEmpty();
    load_game_page();
    expect(clickEvent).toHaveBeenTriggered();
    // expect(Page.textArea).toBe('div#textArea');
    // expect($('#my-fixture')).toContain()
    // spyOn($, "ajax");


    // getMonsters();
    // expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(ajax_enemies_path);

  });
});
