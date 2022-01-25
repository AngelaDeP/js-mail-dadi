
const login = [ 'mickeymouse@gmail.com', 'donald.duck@gmail.com', 'goofygoof@gmail.com'];
const loginEmail = document.getElementById('email');
console.log(loginEmail);

let buttonLogin = document.getElementById('login');

buttonLogin.addEventListener('click',
    function() {

        for (let i = 0; i < login.length; i++) {

            if (login[i] == loginEmail.value) {
                alert('Sei autorizzato ad accedere, ora sfida il nostro computer!');
            } else if (login[i] != loginEmail.value) {
                alert('Accesso non effettuato: ricontrolla la tua mail!');
            }
        }

    }
)

let buttonGame = document.getElementById('game');

buttonGame.addEventListener('click',
    function() {

        //Inserimento parte gioco
        const GamePart = document.querySelector('.start-game');
        GamePart.classList.add('active');

    }
)