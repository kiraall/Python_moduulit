import random

max = int(input("anna tahkojen määrä"))

def heita_noppaa():
    return random.randint(1, max)


while True:
    silmaluku = heita_noppaa()
    print(silmaluku)
    if silmaluku == max:
        break