// $('#sign_up_form').submit(function(event) {
//   event.preventDefault();
//   var email = $("#email").val().toString();
//   var username = $("#username").val().toString();
//   var password = $("#password").val().toString();
//   // var passwordConfirmation = $("#password_confirmation").val();
//
//   var data = {user: {email: email,
//               name: username,
//               password: password
//             }};
//
//   dataText = "user[email]=" + email + "&user[name]=" + username + "&user[password]=" + password;
//   console.log(dataText);
//
//   $.post("http://chasingshadowsapi.herokuapp.com/api/v1/users",dataText, function(data) {
//     console.log(data);
//     $("#content").html($("#welcome_page").html());
//   });
//
// });
