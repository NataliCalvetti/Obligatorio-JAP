 async function onSignIn(googleUser) {
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
    }
}
