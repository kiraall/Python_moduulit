import random

oikea_numero = random.randint(1, 10)
elama = 3

while elama > 0:
    arvaus = int(input("Arvaa numero: "))
    if arvaus == oikea_numero:
        print("OIKEIN")
        break
    elif arvaus is not oikea_numero:
        elama -= 1
        print("Väärin miinus yks elämä!")
