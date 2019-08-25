document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textContent = 'Entrar';

        let nameInput = document.getElementById('name').value;
        let lastNameInput = document.getElementById('lastname').value;
        let emailInput = document.getElementById('email').value;
        let passwordInput = document.getElementById('password').value;

        if (nameInput == '' || lastNameInput == '' || emailInput == '' || passwordInput == '') {
            event.preventDefault();
            document.querySelector('.mensaje').style.display = 'inline-block';
        } 
        else { 
            event.preventDefault();
            window.location.href = 'index.html';
        }
   
})



