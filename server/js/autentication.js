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
                   window.location.href = 'http://localhost:5000/home-page';
               } else {
                   document.querySelector('.mensaje-contraseña').style.display = 'inline-block';

               }
            }else {
                document.querySelector('.mensaje-usuario').style.display = 'inline-block';

            }
            
        }
   
})






