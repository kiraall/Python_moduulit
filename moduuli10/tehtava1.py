class Hissi:
    def __init__(self, alin_kerr, ylin_kerr, nykyinen_kerros):
        self.alin_kerr = alin_kerr
        self.ylin_kerr = ylin_kerr
        self.nykyinen_kerros = nykyinen_kerros

    def siirry_ylos(self):
        self.nykyinen_kerros += 1

    def siirry_alas(self):
        self.nykyinen_kerros -= 1
    def siirry_loppuun(self):
        while self.nykyinen_kerros < 5:
            self.nykyinen_kerros += 1



hissi = Hissi(0, 5, 0)


hissi.siirry_ylos()
hissi.siirry_ylos()
hissi.siirry_alas()
print(hissi.nykyinen_kerros)

hissi.siirry_loppuun()
print(f"LENNETTIIN YLÖS {hissi.nykyinen_kerros} KERROS")
