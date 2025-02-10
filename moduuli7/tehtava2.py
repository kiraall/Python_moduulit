nimet = set()

while True:
    nimi = input("Syötä nimi: ")
    if nimi == "":
        print("Virhe")
        break

    if nimi in nimet:
        print("Aiemmin syötetty nimi")
    else:
        print("Uusi nimi")
        nimet.add(nimi)
print(nimet)