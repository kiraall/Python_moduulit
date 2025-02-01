def muunnin(gal):
    return gal * 3.785

while True:
    try:
        a = float(input("Anna bensan määrä nestegallonoina: "))
        if a < 0:
            print("Ohjelma lopetetaan.")
            break
        print(f"{a} gallonaa on {muunnin(a):.2f} litraa.")
    except ValueError:
        print("Virheellinen syöte! Syötä numero.")