import random

arpakuutiot = int(input("arpakuutioiden lukumäärän"))

summa = 0

# Heitetään arpakuutioita for-silmukalla
for i in range(arpakuutiot):
    silmaluku = random.randint(1, 6)  # Arvotaan luku 1 ja 6 välillä
    summa += silmaluku  # Lisätään silmäluku summaan


print("Silmälukujen summa:", summa)