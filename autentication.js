const users = [
    {
        username: "Juan",
        password: "12345"
    },
    {
        username: "Maria",
        password: "12345"
    },
    {
        username: "José",
        password: "12345"
    },
    {
        username: "Paola",
        password: "12345"
    },
    {
        username: "Lucy",
        password: "12345"
    }
];

document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textContent = 'Entrar';
    event.preventDefault();
    document.querySelector('.mensaje-contraseña').style.display = 'none';
    document.querySelector('.mensaje-usuario').style.display = 'none';
    document.querySelector('.mensaje').style.display = 'none';
    document.querySelector('.mensaje-google').style.display = 'none'

        let nameInput = document.getElementById('name').value;
        let passwordInput = document.getElementById('password').value;

        if (nameInput == '' || passwordInput == '') {
            document.querySelector('.mensaje').style.display = 'inline-block';
        } 
        else { 
           const usuario = users.find((user) => {
                if (user.username == nameInput){
                 return user;
                }
            });
            if (usuario){
               if (usuario.password == passwordInput){
                   localStorage.setItem('usuario', usuario.username);
                   window.location.href = 'index.html';
               } else {
                   document.querySelector('.mensaje-contraseña').style.display = 'inline-block';

               }
            }else {
                document.querySelector('.mensaje-usuario').style.display = 'inline-block';

            }
            
        }
   
})

function onSignIn(googleUser) {
    console.log(googleUser);
    debugger;
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);

   const googleAutentication = [ 
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

  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }




