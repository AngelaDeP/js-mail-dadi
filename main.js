
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

        // Inserimento del tuo numero random
        let yourNumber =  Math.floor(Math.random() * (6 - 1 +1)) +1;
        document.getElementById('rnd-your-number').innerHTML = yourNumber;

        // Inserimento delnumero random del PC
        let pcNumber =  Math.floor(Math.random() * (6 - 1 +1)) +1;
        document.getElementById('rnd-pc-number').innerHTML = pcNumber;

        //Vittoria 
        if (yourNumber > pcNumber) {
            document.getElementById('victory-results').innerHTML = "HAI VINTO!"
        } else {
            document.getElementById('victory-results').innerHTML = "HAI PERSO!"
        }
    }
)