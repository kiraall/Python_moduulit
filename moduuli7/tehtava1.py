import random

oikea_numero = random.randint(1, 10)
elämä = 3

while elämä > 0:
    arvaus = int(input("Guess a number between 1 and 10: "))
    if arvaus == oikea_numero:
        print("You guessed right!")
        break
    if arvaus is not oikea_numero:
        elämä -= 1
        print(f"Sorry, that's not right. You have", elämä, "elämää left.")
