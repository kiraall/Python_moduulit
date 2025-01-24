salasanaa = "rules"
tunnus = "python"

yritys = 0

while yritys < 5:
    kayttajatunnus = input("Anna käyttäjätunnus: ")
    salasana = input("Anna salasana: ")

    if kayttajatunnus == tunnus and salasana == salasanaa:
        print("Tervetuloa ")
        break
    else:
        yritys =  yritys +1
        print("Väärät tunnukset")
if yritys == 5:
    print("Pääsy evätty")

