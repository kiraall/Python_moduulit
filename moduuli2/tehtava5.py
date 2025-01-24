import math
leiviskät, naulat, luodit = float(input("Anna leiviskät:")),float(input("Anna naulat:")), float(input("Anna luodit:"))

luoti_grammoina = 13.3
naula_grammoina = 32 * luoti_grammoina
leiviska_grammoina = 20 * naula_grammoina

massa_gr= (leiviska_grammoina * leiviskät + naula_grammoina * naulat + luodit * luoti_grammoina)


massa_kg = massa_gr // 1000
grammat = massa_gr % 1000
print(f"Massa nykymittojen mukaan on: {massa_kg} kg ja {grammat: 0.2f} grammaa")