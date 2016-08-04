describe('User sign up', function(){

  it('should return true for valid email', function(){
    var result = isEmailValid("test@test.co.uk")
    expect(result).toBe(true);
  })
  xit('validates password', function(){

  })
  xit('validates email', function(){

  })
  xit("should NOT be able to save a user with a username less than 5 characters", function() {
        // var user = {
        //     'name': 'LengthyUserName',
        //     'email': 'hazems@apache.org'
        //     };
        //
        // expect(function() {
        //            userService.saveUser(user);
        //       }).toThrow();
  });

  it('prevents default action on the sign up button', function(){
    spyOnEvent($('#submit_button'), 'submit');
    $('#sign_up_form').submit();
    expect(clickEvent).toHaveBeenPreventedOn('#submit_button');
  })

  // it('should resolve if auth succeed', (done)){
  //   var p = server.login('user', 'password');
  //   p.finally(()=>{
  //       expect(p.isFulfilled()).toBeTruthy();
  //       done();
  //   });
  // });


  //   it('calls ajax post on export button click', function() {
  //     window.render();
  //     var form = $('#sign_up_form');
  //     var submitCallback = jasmine.createSpy().andReturn(false);
  //     form.submit(submitCallback);
  //
  //     $('#sign_up_form submit').click();
  //
  //     expect(form.attr('action')).toEqual('/');
  //     expect($('#export_images_xml_form input').attr('value')).toEqual('');
  //     expect(submitCallback).toHaveBeenCalled();
  // });




});
