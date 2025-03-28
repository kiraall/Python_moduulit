class Julkaisu:

    def __init__(self, nimi):
        self.nimi = nimi

    def tulosta_tiedot(self):
        print(f"{self.nimi}")
class Kirja(Julkaisu):

    def __init__(self, nimi, kirjoittaja, sivumaara):
        self.kirjoittaja = kirjoittaja
        self.sivumaara = sivumaara
        super().__init__(nimi)

    def tulosta_tiedot(self):
        super().tulosta_tiedot()
        print(f"{self.kirjoittaja},{self.sivumaara}")

class Lehti(Julkaisu):

    def __init__(self, nimi, päätoimittaja):
        self.päätoimittaja = päätoimittaja
        super().__init__(nimi)


    def tulosta_tiedot(self):
        super().tulosta_tiedot()
        print(f"{self.päätoimittaja}")

julkaisut = []
julkaisut.append(Kirja("Hytti n:o 6", "Rosa Liksom", 200))
julkaisut.append(Lehti("Aku Ankka","Aki Hyyppä"))
for i in julkaisut:
    i.tulosta_tiedot()