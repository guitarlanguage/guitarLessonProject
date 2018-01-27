$('document').ready(function() {

  var webAuth = new auth0.WebAuth({
    domain: "guitarlanguage.auth0.com",
    clientID: "y8AA4z9Gre45oDzkbPIjJTM4RnE36HJG",
    redirectUri: "http://localhost:3000",
    audience: 'https://' + "guitarlanguage.auth0.com" + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  var loginBtn = $('#authLogin');

  loginBtn.click(function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});
