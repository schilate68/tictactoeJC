document.addEventListener('DOMContentLoaded', function () {

    let playerTurnState = false;
    let winnerState = false;


    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener("click", addLetter);

        function checkWinner() {

            if (document.getElementById("1").innerHTML === '<span class="x">X</span>' && document.getElementById("2").innerHTML === '<span class="x">X</span>' && document.getElementById("3").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("1").innerHTML === '<span class="o">O</span>' && document.getElementById("2").innerHTML === '<span class="o">O</span>' && document.getElementById("3").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("4").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("6").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("4").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("6").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("7").innerHTML === '<span class="o">O</span>' && document.getElementById("8").innerHTML === '<span class="o">O</span>' && document.getElementById("9").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("7").innerHTML === '<span class="x">X</span>' && document.getElementById("8").innerHTML === '<span class="x">X</span>' && document.getElementById("9").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("1").innerHTML === '<span class="x">X</span>' && document.getElementById("4").innerHTML === '<span class="x">X</span>' && document.getElementById("7").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("1").innerHTML === '<span class="o">O</span>' && document.getElementById("4").innerHTML === '<span class="o">O</span>' && document.getElementById("7").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("2").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("8").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("2").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("8").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("3").innerHTML === '<span class="x">X</span>' && document.getElementById("6").innerHTML === '<span class="x">X</span>' && document.getElementById("9").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("3").innerHTML === '<span class="o">O</span>' && document.getElementById("6").innerHTML === '<span class="o">O</span>' && document.getElementById("9").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("1").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("9").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("1").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("9").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("3").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("7").innerHTML === '<span class="x">X</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            } else if (document.getElementById("3").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("7").innerHTML === '<span class="o">O</span>') {
                document.getElementById('result-message').innerHTML = "You won!";
                winnerState = true;
            }
        }

        function showRestartButton() {

            if (winnerState) {
                document.getElementById("restart").insertAdjacentHTML("afterbegin", '<button>Restart</button>');
            }

            document.getElementById("restart").addEventListener("click", function () {

                for (let i = 1; i <= 9; i++) {

                    document.getElementById(i.toString()).innerHTML = "";
                }

                document.getElementById("restart").innerHTML = "";

                winnerState = false;



            });
        }







        function addLetter() {

            if (playerTurnState) {
                if (!document.getElementById(i.toString()).innerHTML) {
                    document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="x">X</span>');
                    playerTurnState = false;
                    checkWinner();
                    showRestartButton();
                }

            } else if ((!document.getElementById(i.toString()).innerHTML)) {
                document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="o">O</span>');
                playerTurnState = true;
                checkWinner();
                showRestartButton();
            }

        }
    }
});



