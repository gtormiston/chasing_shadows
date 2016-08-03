describe('User sign up', function(){

  it('validates email', function(){

  })
  it('validates password', function(){

  })
  it('validates email', function(){

  })
  it("should NOT be able to save a user with a username less than 5 characters", function() {
        var user = {
            'name': 'LengthyUserName',
            'email': 'hazems@apache.org'
            };

        expect(function() {
                   userService.saveUser(user);
              }).toThrow();
    });


  it('calls ajax post on export button click', function() {
    window.render();
    var form = $('#sign_up_form');
    var submitCallback = jasmine.createSpy().andReturn(false);
    form.submit(submitCallback);

    $('#sign_up_form submit').click();

    expect(form.attr('action')).toEqual('/');
    expect($('#export_images_xml_form input').attr('value')).toEqual('');
    expect(submitCallback).toHaveBeenCalled();
});


});
