function onSignIn(googleUser) {
    document.querySelector('.mensaje-google').style.display = 'none';
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);

    if(id_token){
        localStorage.setItem('usuario', profile.getName());
        window.location.href = 'index.html';
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