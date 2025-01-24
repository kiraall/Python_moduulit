import math

mitat = float(input("Anna senttimetrit:"))
tuuma = 2.54
while mitat >= 0:
    print(f"{mitat * tuuma} tuumaa")
    mitat = float(input("Anna senttimetrit:"))
print("Ei saa antaa negatiivisiä lukuja")

