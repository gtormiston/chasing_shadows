// describe("DOM TESTS:***************", function() {
//   describe("Button Click Event Tests", function() {
//     var spyEvent;
//
//     beforeEach(function() {
//       setUpHTMLFixture();
//     });
//
//     it ("should invoke the btnShowMessage click event.", function() {
//       spyEvent = spyOnEvent('#btnShowMessage', 'click');
//       $('#btnShowMessage').trigger( "click" );
//
//       expect('click').toHaveBeenTriggeredOn('#btnShowMessage');
//       expect(spyEvent).toHaveBeenTriggered();
//     });
//
//     it ("should invoke the btnHideMessage click event.", function() {
//       spyEvent = spyOnEvent('#btnHideMessage', 'click');
//       $('#btnHideMessage').trigger( "click" );
//
//       expect('click').toHaveBeenTriggeredOn('#btnHideMessage');
//       expect(spyEvent).toHaveBeenTriggered();
//     });
//   });
//
//   describe("Show message tests", function() {
//     beforeEach(function() {
//       setUpHTMLFixture();
//       $('#txtMessage').val(MSG);
//       $('#btnShowMessage').trigger( "click" );
//     });
//
//     it ("should display the message when button is clicked.", function() {
//       expect($('#pMsg')).toHaveText($('#txtMessage').val());
//     });
//   });
//
//   describe("Hide message tests", function() {
//     beforeEach(function() {
//       setUpHTMLFixture();
//       $('#pMsg').text(MSG);
//       $('#btnHideMessage').trigger( "click" );
//     });
//
//     it ("should remove the message when button is clicked.", function() {
//       expect($('#pMsg')).toHaveText("");
//     });
//   });
// });
