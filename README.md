

# Rock-Paper-Scissors Game 🪨📄✂️

**Authored by Blessing Fortune Kwomo**

Welcome to the Rock-Paper-Scissors game! This simple Python script, created by Blessing Fortune Kwomo, allows you to play the classic game against the computer. This project is hosted on GitHub Pages and provides an interactive web-based version of the game.

## Responsive Design

The user interface of Rock-Paper-Scissors game has been developed with responsiveness in mind. This means that the layout and design of the quiz adapt and adjust to different screen sizes, such as desktops, tablets, and smartphones. The responsiveness ensures that users can enjoy the quiz without any usability issues, regardless of the device they are using.

## Screenshots

Here are some screenshots that showcase the responsive design of the Rock-Paper-Scissors Game Quiz:
<img src="" alt="">
<img src="" alt="">
<img src="" alt="">

<img src="/workspaces/python-essentials-project/assets/imagefile.png"alt="responsive views">

Feel free to explore the quiz on different devices to see how the user interface adapts!

## Table of Contents

- [Description](#description)
- [How to Play](#how-to-play)
- [Code Explanation](#code-explanation)
  - [game() Function](#game-function)
  - [check_victory() Function](#check_victory-function)
- [Running the Script](#running-the-script)
- [Responsive Design](#responsive-design)
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

Follow these on-screen instructions to play the game:

Choose one: 'r' for rock, 'p' for paper, 's' for scissors.
The computer will randomly choose one of rock, paper, or scissors.
The script will display the computer's choice and the result of the game.

## Responsive Design

The Rock-Paper-Scissors game website is designed to be responsive and works well on various devices, including desktops, tablets, and mobile phones. The layout adjusts dynamically to provide an optimal user experience regardless of screen size.

## Acknowledgements 🙏

I would like to extend my heartfelt gratitude to:

- **Limerick ETB:** For the opportunity to learn coding and enhance our skills.
- **Code Institute:** For providing the platform and resources to make this project possible.
- **Python Programming Language:** For making it easy to create fun and interactive games like this one.

## Footer

&copy; 2024 Rock-Paper-Scissors Game. All rights reserved. Authored by Blessing Fortune Kwomo. 🌟

---

Thank you for checking out the Rock-Paper-Scissors game! Enjoy playing and feel free to contribute or provide feedback.

