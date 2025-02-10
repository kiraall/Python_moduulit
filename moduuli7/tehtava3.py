lentoasemat = set()

while True:

    print("\nValitse toiminto:")
    print("1. Syötä uusi lentoasema")
    print("2. Hae lentoaseman tiedot")
    print("3. Lopeta")
    valinta = input("Anna valintasi (1/2/3): ")


    if valinta == "1":
        icao = input("Syötä lentoaseman ICAO-koodi: ")
        nimi = input("Syötä lentoaseman nimi: ")
        # Lisätään lentoasema tupleena joukkoon
        lentoasemat.add((icao, nimi))
        print(f"Lentoasema {nimi} tallennettu ICAO-koodilla {icao}.")



    elif valinta == "2":
        icao = input("Syötä haettavan lentoaseman ICAO-koodi: ")

        loydetty = False
        for asema in lentoasemat:
            if asema[0] == icao:
                print(f"ICAO-koodia {icao} vastaava lentoasema on {asema[1]}.")
                loydetty = True
                break
        if not loydetty:
            print(f"ICAO-koodia {icao} ei löytynyt.")


    elif valinta == "3":
        print("Ohjelma suljetaan. Kiitos!")
        break


    else:
        print("Virheellinen valinta. Valitse 1, 2 tai 3.")