 async function onSignIn(googleUser) {
     document.querySelector('.mensaje-google').style.display = 'none';
     gapi.auth2.init({
        client_id: 'CLIENT_ID.apps.googleusercontent.com',
        scope: 'profile'
     });
     gapi.auth2.getAuthInstance();

     gapi.auth2.onSignIn(() => {
         var profile = await googleUser.getBasicProfile();
         var id_token = await googleUser.getAuthResponse().id_token;
         if(id_token){
        const googleUsername = await profile.getName();
        localStorage.setItem('usuario', googleUsername);
        console.log(profile);
        } else {
        document.querySelector('.mensaje-google').style.display = 'inline-block';
        }
     })

}
