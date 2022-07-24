function AddUsers() {

    var PlayerUsername1ID = document.getElementById("Username1Input");
    var PlayerUsername2ID = document.getElementById("Username2Input");

    var value1 = "";
    value1 = PlayerUsername1ID.value;

    var value2 = "";
    value2 = PlayerUsername2ID.value;

    localStorage.setItem("PlayerUsername1", "");
    localStorage.setItem("PlayerUsername2", "");

    if (value1 == "") {
        document.getElementById("WarningLabel").innerHTML = "Please fill Player1 Username"
    } else if (value2 == "") {
        document.getElementById("WarningLabel").innerHTML = "Please fill Player2 Username"
    } else if (value1 == value2) {
        document.getElementById("WarningLabel").innerHTML = "You Should Fill Username Inputs With Different Usernames"
    } else {
        console.log(value1, value2);
        localStorage.setItem("PlayerUsername1", value1);
        localStorage.setItem("PlayerUsername2", value2);
        window.location = "GamePage.html";
    }
}

document.getElementById("Player1UsernameOutputIOnScoreLabel").innerHTML = "( " + localStorage.getItem("PlayerUsername1") + " )";
document.getElementById("Player2UsernameOutputIOnScoreLabel").innerHTML = "( " + localStorage.getItem("PlayerUsername2") + " )";

document.getElementById("QuestionTurnOutput").innerHTML = "Question Turn - " + localStorage.getItem("PlayerUsername1");
document.getElementById("AnswerTurnOutput").innerHTML = "Answer Turn - " + localStorage.getItem("PlayerUsername2");
QuestionTurn = "Player1";
AnswerTurn = "Player2";

Player1Score = 0;
Player2Score = 0;

function MakeQuestion() {

    Number1 = document.getElementById("FirstNumberInput").value;
    Number2 = document.getElementById("SecondNumberInput").value;
    AnswerForQuestion = Number1 * Number2;

    Question = "<h4>" + Number1 + " X " + Number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='InputCheckBox'>";
    Button = "<br><br><button type='button' class='btn btn-success' onclick='CheckTheAnswer()'>Check</button>";
    QuestionAnswerDivFullOutput = Question + input_box + Button;;

    document.getElementById("EquationAnswerInputAndCheckButtonOutput").innerHTML = QuestionAnswerDivFullOutput;

    document.getElementById("FirstNumberInput").value = "";
    document.getElementById("SecondNumberInput").value = "";
}

function CheckTheAnswer() {

    GetAnswer = document.getElementById("InputCheckBox").value;

    if (GetAnswer == AnswerForQuestion) {

        window.alert("Yay, Your Correct")

        if (AnswerTurn == "Player2") {
            UpdatePlayer2Score = Player2Score + 1;
            Player2Score = UpdatePlayer2Score;
            document.getElementById("scorePlayer2").innerHTML = UpdatePlayer2Score;
            QuestionTurn == "Player2";
            AnswerTurn = "Player1"
        } else {
            UpdatePlayer1Score = Player1Score + 1;
            Player1Score = UpdatePlayer1Score;
            document.getElementById("scorePlayer1").innerHTML = UpdatePlayer1Score;
            QuestionTurn == "Player1";
            AnswerTurn = "Player2"
        }
    } else {
        window.alert("Oopsies, Your Wrong")
        if (AnswerTurn == "Player2") {
            QuestionTurn == "Player2";
            AnswerTurn = "Player1"
        } else {
            QuestionTurn == "Player1";
            AnswerTurn = "Player2"
        }

    }

    if (QuestionTurn == "Player1") {
        document.getElementById("QuestionTurnOutput").innerHTML = "Question Turn - " + localStorage.getItem("PlayerUsername2")
        document.getElementById("AnswerTurnOutput").innerHTML = "Answer Turn - " + localStorage.getItem("PlayerUsername1")
        QuestionTurn = "Player2"
    } else {
        document.getElementById("QuestionTurnOutput").innerHTML = "Question Turn - " + localStorage.getItem("PlayerUsername1")
        document.getElementById("AnswerTurnOutput").innerHTML = "Answer Turn - " + localStorage.getItem("PlayerUsername2")
        QuestionTurn = "Player1"
    }

    document.getElementById("EquationAnswerInputAndCheckButtonOutput").innerHTML = ""
}