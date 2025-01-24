import random
import math

N = 0
n = 0

arvotojen_lkm = 10000

while N < arvotojen_lkm:
    x = random.uniform(-1, 1)
    y = random.uniform(-1, 1)

    if x ** 2 + y ** 2 < 1:
        n += 1
    N  += 1


piin_likiarvo=4*n/N
print(f"Piin likiarvo on {piin_likiarvo} ja ero tarkkaan {math.pi-piin_likiarvo}")