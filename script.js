 async function onSignIn() {
    gapi.load('auth2', (response) => {
        console.log(response);
      });

    gapi.client.init({
        'clientId': '647412047104-pfh3cjaqv6dc91ur84hnkjf9ltb8mstl.apps.googleusercontent.com',
        'scope': "profile"
    }).then(function () {
      gapi.auth2.onSignIn().then( (response) => {
        console.log(response);
      });

      /* // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();

    document.querySelector('.mensaje-google').style.display = 'none';
    const localStorageName = localStorage.getItem('usuario');
    var profile = await googleUser.getBasicProfile();
    var id_token = await googleUser.getAuthResponse().id_token;

    if(id_token){
        const googleUsername = await profile.getName();
        localStorage.setItem('usuario', googleUsername);
        window.location.href = 'index.html';
    } else {
        document.querySelector('.mensaje-google').style.display = 'inline-block';
    } */
    })};
