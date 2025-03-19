class Auto:
    def __init__(self, rekisteritunnus, huippunopeus):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.nyt_nopeus = 0  # Alustetaan nopeus nollaksi
        self.kuljettu_matka = 0  # Alustetaan kuljettu matka nollaksi

    def tulosta_ominaisuudet(self):
        print(f"Rekisteritunnus: {self.rekisteritunnus}")
        print(f"Huippunopeus: {self.huippunopeus} km/h")
        print(f"Tämänhetkinen nopeus: {self.nyt_nopeus} km/h")
        print(f"Kuljettu matka: {self.kuljettu_matka} km")


uusiauto = Auto("ABC-123", 142)
uusiauto.tulosta_ominaisuudet()