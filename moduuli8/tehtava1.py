import random

oikea_luku = random.randint(1, 10)
arvaus = int(input("Arvaa numero: "))

while oikea_luku != arvaus:
    arvaus = int(input("Arvaa numero: "))
    if oikea_luku == arvaus:
        print("Voitit!")
    elif arvaus > oikea_luku:
        print("Luku minkä annoit on isompi")
    elif arvaus < oikea_luku:
        print("Luku minkä annoit on pienempi")

