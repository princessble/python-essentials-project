
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