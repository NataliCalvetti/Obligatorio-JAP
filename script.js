function onSignIn(googleUser) {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
          client_id: '647412047104-pfh3cjaqv6dc91ur84hnkjf9ltb8mstl.apps.googleusercontent.com',
          fetch_basic_profile: false,
          scope: 'profile'
        });

    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present. 
  }
}


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }