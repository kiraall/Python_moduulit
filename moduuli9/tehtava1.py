class Auto:
    def __init__(self, rekisteritunnus, huippunopeus, tämänhetkinen_nopeus, kuljettu_matka):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.tämänhetkinen_nopeus = tämänhetkinen_nopeus
        self.kuljettu_matka = kuljettu_matka
auto = Auto("ABC-123", 142, 0, 0)

print(f"{auto.rekisteritunnus} ja {auto.huippunopeus} ja {auto.tämänhetkinen_nopeus} ja {auto.kuljettu_matka}")