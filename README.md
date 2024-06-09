# python-essentials-project
python game quiz
# Rock-Paper-Scissors Game 🪨📄✂️

*Authored by Blessing Fortune Kwomo*

Welcome to the Rock-Paper-Scissors game! This simple Python script, created by Blessing Fortune Kwomo, allows you to play the classic game against the computer.

## Table of Contents
- [Description](#description)
- [How to Play](#how-to-play)
- [Code Explanation](#code-explanation)
  - [game() Function](#game-function)
  - [check_victory() Function](#check_victory-function)
- [Running the Script](#running-the-script)
- [Acknowledgements](#acknowledgements)
- [Footer](#footer)

## Description

This Rock-Paper-Scissors game, authored by Blessing Fortune Kwomo, allows you to play against the computer. You can choose rock, paper, or scissors, and the computer will make a random choice. The script will then determine the winner and print the result.

## How to Play

1. Run the script.
2. When prompted, enter your choice: 'r' for rock, 'p' for paper, or 's' for scissors.
3. The script will display the computer's choice and the result of the game.

## Code Explanation

### game() Function

The `game()` function is the main function that handles user input, generates the computer's choice, and determines the result of the game.

```python
def game():
    user_choice = input("Choose one: 'r' for rock, 'p' for paper, 's' for scissors\n")
    computer_choice = random.choice(['r', 'p', 's'])

    if user_choice == computer_choice:
        return 'It\'s a draw'

    if check_victory(user_choice, computer_choice):
        return 'Congratulations, you win!'

    return 'Sorry, you lose.'
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

To run the script, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Run the script using a Python interpreter.

```bash
python rock_paper_scissors.py
```

4. Follow the on-screen instructions to play the game.

## Acknowledgements 🙏

We would like to thank the Python programming language for making it easy to create fun and interactive games like this one.

## Footer

&copy; 2024 Rock-Paper-Scissors Game. All rights reserved. Authored by Blessing Fortune Kwomo. 🌟