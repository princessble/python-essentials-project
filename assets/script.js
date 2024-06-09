function playGame(userChoice) {
    const choices = ['r', 'p', 's'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${convertChoice(userChoice)}, computer chose ${convertChoice(computerChoice)}. ${result}`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a draw!";
    }
    if ((user === 'r' && computer === 's') ||
        (user === 's' && computer === 'p') ||
        (user === 'p' && computer === 'r')) {
        return "Congratulations, you win!";
    }
    return "Sorry, you lose.";
}

function convertChoice(choice) {
    switch (choice) {
        case 'r':
            return 'Rock';
        case 'p':
            return 'Paper';
        case 's':
            return 'Scissors';
    }
}
