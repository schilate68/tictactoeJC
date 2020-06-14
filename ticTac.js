document.addEventListener('DOMContentLoaded', function () {

    let playerTurnState = false;
    let winnerState = false;
    let xScore = 0;
    let oScore = 0;
    let stateWinnerLetter;
    let vsCPU = false;

    for (let i = 1; i <= 9; i++) {

        document.getElementById(i.toString()).addEventListener("click", addLetter);

        function setWinnerDetails(a, b, c) {
            /* document.getElementById('result-message').innerHTML = "YOU WON!"; */
            winnerState = true;
            document.getElementById(a.toString()).style.color = '#f8b24f';
            document.getElementById(b.toString()).style.color = '#f8b24f';
            document.getElementById(c.toString()).style.color = '#f8b24f';

            return [a, b, c];

        }

        function checkWinner() {

            if (document.getElementById("1").innerHTML === '<span class="x">X</span>' && document.getElementById("2").innerHTML === '<span class="x">X</span>' && document.getElementById("3").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(1, 2, 3);

            } else if (document.getElementById("1").innerHTML === '<span class="o">O</span>' && document.getElementById("2").innerHTML === '<span class="o">O</span>' && document.getElementById("3").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(1, 2, 3);

            } else if (document.getElementById("4").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("6").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(4, 5, 6);

            } else if (document.getElementById("4").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("6").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(4, 5, 6);

            } else if (document.getElementById("7").innerHTML === '<span class="o">O</span>' && document.getElementById("8").innerHTML === '<span class="o">O</span>' && document.getElementById("9").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(7, 8, 9);

            } else if (document.getElementById("7").innerHTML === '<span class="x">X</span>' && document.getElementById("8").innerHTML === '<span class="x">X</span>' && document.getElementById("9").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(7, 8, 9);

            } else if (document.getElementById("1").innerHTML === '<span class="x">X</span>' && document.getElementById("4").innerHTML === '<span class="x">X</span>' && document.getElementById("7").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(1, 4, 7);

            } else if (document.getElementById("1").innerHTML === '<span class="o">O</span>' && document.getElementById("4").innerHTML === '<span class="o">O</span>' && document.getElementById("7").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(1, 4, 7);

            } else if (document.getElementById("2").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("8").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(2, 5, 8);

            } else if (document.getElementById("2").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("8").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(2, 5, 8);

            } else if (document.getElementById("3").innerHTML === '<span class="x">X</span>' && document.getElementById("6").innerHTML === '<span class="x">X</span>' && document.getElementById("9").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(3, 6, 9);

            } else if (document.getElementById("3").innerHTML === '<span class="o">O</span>' && document.getElementById("6").innerHTML === '<span class="o">O</span>' && document.getElementById("9").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(3, 6, 9);

            } else if (document.getElementById("1").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("9").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(1, 5, 9);

            } else if (document.getElementById("1").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("9").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(1, 5, 9);

            } else if (document.getElementById("3").innerHTML === '<span class="x">X</span>' && document.getElementById("5").innerHTML === '<span class="x">X</span>' && document.getElementById("7").innerHTML === '<span class="x">X</span>') {
                xScore++;
                stateWinnerLetter = 'x';
                return setWinnerDetails(3, 5, 7);

            } else if (document.getElementById("3").innerHTML === '<span class="o">O</span>' && document.getElementById("5").innerHTML === '<span class="o">O</span>' && document.getElementById("7").innerHTML === '<span class="o">O</span>') {
                oScore++;
                stateWinnerLetter = 'o';
                return setWinnerDetails(3, 5, 7);

            }
        }

        function removeElement() {
            let elem = document.getElementById("divClicksId");
            elem.parentNode.removeChild(elem);
            return false;
        }

        function restartFullGame(elements) {

            document.getElementById("restart").addEventListener("click", function () {

                if (elements) {
                    elements.forEach(function (element) {
                        document.getElementById(element.toString()).style.color = '#ebebe3';
                    });

                }

                for (let i = 1; i <= 9; i++) {
                    document.getElementById(i.toString()).innerHTML = "";
                }
                document.getElementById('result-message').innerHTML = "";
                winnerState = false;
                removeElement();
            })
        }

        function showRestartButton() {

            let checkFullBoard = false;
            let counter = 0;

            for (let i = 1; i <= 9; i++) {
                if (document.getElementById(i.toString()).innerHTML) {
                    counter++;
                }
            }

            if (counter === 9) {
                checkFullBoard = true;
            }

            if (winnerState) {
                let audioWin = new Audio('SoundWinner.mp3');
                audioWin.play();
                document.getElementById("table").insertAdjacentHTML("beforebegin", '<div id="divClicksId" class=divClicks></div>');
            } else if (!winnerState && checkFullBoard) {
                document.getElementById('result-message').innerHTML = "DRAW";
            }
        }

        function setScore() {
            if (stateWinnerLetter === 'x') {
                document.getElementById('xScore').innerHTML = xScore;
            } else if (stateWinnerLetter === 'o') {
                document.getElementById('oScore').innerHTML = oScore;
            }
        }


        function addLetter() {

            if (vsCPU) {
                console.log("Hello CPU");
                if (playerTurnState) {
                    if (!document.getElementById(i.toString()).innerHTML) {
                        let audioX = new Audio('SoundPlay.mp3');
                        audioX.play();
                        document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="x">X</span>');
                        playerTurnState = false;
                        let elements = checkWinner();
                        setScore();
                        showRestartButton();
                        restartFullGame(elements);

                    }

                } else if ((!document.getElementById(i.toString()).innerHTML)) {
                    let audioO = new Audio('SoundPlay.mp3');
                    audioO.play();
                    document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="o">O</span>');
                    playerTurnState = true;
                    let elements2 = checkWinner();
                    setScore();
                    showRestartButton();
                    restartFullGame(elements2);

                }


            } else {
                if (playerTurnState) {
                    if (!document.getElementById(i.toString()).innerHTML) {
                        let audioX = new Audio('SoundPlay.mp3');
                        audioX.play();
                        document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="x">X</span>');
                        playerTurnState = false;
                        let elements = checkWinner();
                        setScore();
                        showRestartButton();
                        restartFullGame(elements);

                    }

                } else if ((!document.getElementById(i.toString()).innerHTML)) {
                    let audioO = new Audio('SoundPlay.mp3');
                    audioO.play();
                    document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="o">O</span>');
                    playerTurnState = true;
                    let elements2 = checkWinner();
                    setScore();
                    showRestartButton();
                    restartFullGame(elements2);

                }

            }



        }
    }
});



