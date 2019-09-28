 async function onSignIn(googleUser) {
     gapi.auth2.init({
        client_id: '647412047104-pfh3cjaqv6dc91ur84hnkjf9ltb8mstl.apps.googleusercontent.com',
        scope: 'profile'
     });

     gapi.auth2.onSignIn((response) => {
         console.log(response);
     });
    /* document.querySelector('.mensaje-google').style.display = 'none';
    var profile = await googleUser.getBasicProfile();
    var id_token = await googleUser.getAuthResponse().id_token;

    if(id_token){
        const googleUsername = await profile.getName();
        localStorage.setItem('usuario', googleUsername);
        console.log(profile);
    } else {
        document.querySelector('.mensaje-google').style.display = 'inline-block';
    } */
}
