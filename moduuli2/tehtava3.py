import math
kanta, korkeus = float(input("Mikä on suorakulmion kanta?")), float(input("Mikä on suorakulmion korkeus?"))
piiri = (kanta * 2 + korkeus * 2)
pintaala = (kanta*korkeus)
print(f"Suorakulmion piiri on: {piiri} ja pinta-ala on: {pintaala}")
