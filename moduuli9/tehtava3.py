class Auto:
    def __init__(self, rekisteritunnus, huippunopeus, tämänhetkinen_nopeus, kuljettu_matka, kiihdytä, kulje):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.tämänhetkinen_nopeus = tämänhetkinen_nopeus  # Alustetaan nopeus nollaksi
        self.kuljettu_matka = kuljettu_matka  # Alustetaan kuljettu matka nollaksi
        self.kiihdytä = kiihdytä
        self.kulje = kulje

    def kiihdytys(self):
        self.tämänhetkinen_nopeus += 30
        self.tämänhetkinen_nopeus += 70
        self.tämänhetkinen_nopeus += 50
        if auto.kiihdytä > 142:
            self.tämänhetkinen_nopeus = auto.huippunopeus
    def hatajarru(self):
        self.tämänhetkinen_nopeus -= 200
        if self.tämänhetkinen_nopeus < 0:
            self.tämänhetkinen_nopeus = 0
    def kuljucoopper(self, hour):
        self.kiihdytä += 60
        valimatka = self.kiihdytä * hour
        self.kuljettu_matka += valimatka



auto = Auto("ABC-123", 142, 0, 2000, 0, 0)

auto.kuljucoopper(1.5)
print(f"{auto.rekisteritunnus} ja {auto.huippunopeus} ja {auto.tämänhetkinen_nopeus} ja {auto.kuljettu_matka} ja {auto.kiihdytä}")
