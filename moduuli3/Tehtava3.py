sukupuoli, arvo = str(input("Mikä on sinun sukupuoli?")), float(input("Mikä on sinun hemoglobiiniarvo?"))
if sukupuoli == "Nainen":
    if arvo<117:
        print("Alhainen")
    if arvo>175:
        print("Korkea")
    if arvo>117 and arvo<175:
        print("Normaali")

if sukupuoli == "Mies":
    if arvo<134:
        print("Alhainen")
    elif arvo > 134 and arvo < 195:
        print("Normaali")

    else:
        print("Korkea")

