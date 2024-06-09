
# Rock-Paper-Scissors Game 🪨📄✂️

**Authored by Blessing Fortune Kwomo**

Welcome to the Rock-Paper-Scissors game! This simple Python script, created by Blessing Fortune Kwomo, allows you to play the classic game against the computer. This project is hosted on GitHub Pages and provides an interactive web-based version of the game.

## Table of Contents

- [Description](#description)
- [How to Play](#how-to-play)
- [Code Explanation](#code-explanation)
  - [game() Function](#game-function)
  - [check_victory() Function](#check_victory-function)
- [Running the Script](#running-the-script)
- [Publishing on GitHub Pages](#publishing-on-github-pages)
- [Acknowledgements](#acknowledgements)
- [Footer](#footer)

## Description

This Rock-Paper-Scissors game, authored by Blessing Fortune Kwomo, allows you to play against the computer. You can choose rock, paper, or scissors, and the computer will make a random choice. The script will then determine the winner and print the result.

## How to Play

1. Run the script or open the web page.
2. When prompted, enter your choice: 'r' for rock, 'p' for paper, or 's' for scissors.
3. The script will display the computer's choice and the result of the game.

## Code Explanation

### game() Function

The `game()` function is the main function that handles user input, generates the computer's choice, and determines the result of the game.

```python
import random

def game():
    user_choice = input("Choose one: 'r' for rock, 'p' for paper, 's' for scissors\n")
    computer_choice = random.choice(['r', 'p', 's'])

    if user_choice == computer_choice:
        return 'It\'s a draw'

    if check_victory(user_choice, computer_choice):
        return 'Congratulations, you win!'

    return 'Sorry, you lose.'

def check_victory(player, opponent):
    # Determine if the player has won
    # rock beats scissors, scissors beat paper, paper beats rock
    if (player == 'r' and opponent == 's') or \
       (player == 's' and opponent == 'p') or \
       (player == 'p' and opponent == 'r'):
        return True

print(game())
```

### check_victory() Function

The `check_victory()` function determines if the player has won the game based on the classic rules: rock beats scissors, scissors beat paper, and paper beats rock.

```python
def check_victory(player, opponent):
    # Determine if the player has won
    # rock beats scissors, scissors beat paper, paper beats rock
    if (player == 'r' and opponent == 's') or \
       (player == 's' and opponent == 'p') or \
       (player == 'p' and opponent == 'r'):
        return True
```

## Running the Script

To run the script locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Run the script using a Python interpreter:

```bash
python rock_paper_scissors.py
```

Follow the on-screen instructions to play the game.

## Publishing on GitHub Pages

### Directory Structure

Ensure your project directory has the following structure:

```
python-essentials-project/
│
├── index.html
└── assets/
    └── script.js
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock-Paper-Scissors Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .choice {
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1>Rock-Paper-Scissors Game 🪨📄✂️</h1>
    <p>Authored by Blessing Fortune Kwomo</p>
    <div>
        <button class="choice" onclick="playGame('r')">Rock</button>
        <button class="choice" onclick="playGame('p')">Paper</button>
        <button class="choice" onclick="playGame('s')">Scissors</button>
    </div>
    <h2 id="result"></h2>
    
    <script src="assets/script.js"></script>
</body>
</html>
```

### `assets/script.js`

```javascript
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
```

### Steps to Publish on GitHub Pages

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository named `python-essentials-project`.

2. **Clone the Repository Locally:**
   - Use Git to clone the repository to your local machine:
     ```bash
     git clone https://github.com/YOUR-USERNAME/python-essentials-project.git
     ```

3. **Add Your Files:**
   - Copy your `index.html` and `assets/script.js` files into the cloned repository directory.

4. **Commit and Push Your Changes:**
   ```bash
   cd python-essentials-project
   git add .
   git commit -m "Add Rock-Paper-Scissors game"
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Go to the repository on GitHub.
   - Click on the "Settings" tab.
   - Scroll down to the "GitHub Pages" section.
   - Under "Source", select `main` branch and save.

6. **Access Your Site:**
   - Your site will be available at `https://YOUR-USERNAME.github.io/python-essentials-project/`.

## Acknowledgements 🙏

We would like to extend our heartfelt gratitude to:

- **Limerick ETB:** For the opportunity to learn coding and enhance our skills.
- **Code Institute:** For providing the platform and resources to make this project possible.
- **Python Programming Language:** For making it easy to create fun and interactive games like this one.

## Footer

&copy; 2024 Rock-Paper-Scissors Game. All rights reserved. Authored by Blessing Fortune Kwomo. 🌟

---

Thank you for checking out the Rock-Paper-Scissors game! Enjoy playing and feel free to contribute or provide feedback.

