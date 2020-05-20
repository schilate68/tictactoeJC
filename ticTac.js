document.addEventListener('DOMContentLoaded', function () {

    let playerTurnState = false;

    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener("click", addLetter);

        function addLetter() {


            if (playerTurnState) {
                if (!document.getElementById(i.toString()).innerHTML) {
                    document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="x">X</span>');
                    playerTurnState = false;
                }

            } else if ((!document.getElementById(i.toString()).innerHTML)) {
                document.getElementById(i.toString()).insertAdjacentHTML("afterbegin", '<span class="o">O</span>');
                playerTurnState = true;

            }


            if (document.getElementById(i.toString()).innerHTML) {
                if (document.getElementById("1").innerHTML === document.getElementById("2").innerHTML && document.getElementById("2").innerHTML === document.getElementById("3").innerHTML) {

                    document.getElementById('result-message').innerHTML = "You won!";


                }
            }


        }





    }





});



