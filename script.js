 async function onSignIn(googleUser) {
    document.querySelector('.mensaje-google').style.display = 'none';
    var profile = await googleUser.getBasicProfile();
    var id_token = await googleUser.getAuthResponse().id_token;

    if(id_token){
        const googleUsername = await profile.getName();
        localStorage.setItem('usuario', googleUsername);
        console.log(profile);
    } else {
        document.querySelector('.mensaje-google').style.display = 'inline-block';
    }
}

/*function signOut() {
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
console.log('User signed out.');
});
}*/