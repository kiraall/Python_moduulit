kuha = float(input("Mikä on kuhan pituus?"))
if kuha<=37:
    puuttuva_pituus = 37 - kuha
    print(f"Laske kuha takaisin järveen! Alimmasta sallitusta pyyntimitasta puuttuu: {puuttuva_pituus:0.0f}cm")
else:
    print("Kuha on sallittua pyyntimittaa pidempi. Hyvää kalastusonnea!")

