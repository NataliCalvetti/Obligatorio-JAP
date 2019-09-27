function onSignIn(googleUser) {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
          client_id: '647412047104-pfh3cjaqv6dc91ur84hnkjf9ltb8mstl.apps.googleusercontent.com',
          fetch_basic_profile: false,
          scope: 'profile'
        });
      
        // Sign the user in, and then retrieve their ID.
      });

      function whenClick() {
        auth2.signIn().then(function() {
            console.log(auth2.currentUser.get().getId());
          });
      }
      
   /*const googleAutentication = [ 
        {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail()
        }
    ];

    if(googleAutentication){
        localStorage.setItem('usuario', googleAutentication.name);
                   window.location.href = 'index.html';
    }else {
            document.querySelector('.mensaje-google').style.display = 'inline-block';

    }

  }*/

  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }}}
