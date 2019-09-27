function onSignIn() {
    var auth2; // The Sign-In object.
var googleUser; // The current user.


/**
 * Calls startAuth after Sign in V2 finishes setting up.
 */
var appStart = function() {
  gapi.load('auth2', initSigninV2);
};


/**
 * Initializes Signin v2 and sets up listeners.
 */
var initSigninV2 = function() {
  auth2 = gapi.auth2.init({
      client_id: 'CLIENT_ID.apps.googleusercontent.com',
      scope: 'profile'
  });

  // Listen for sign-in state changes.
  auth2.isSignedIn.listen(signinChanged);

  var signinChanged = function (val) {
    console.log('Signin state changed to ', val);
  };
}}