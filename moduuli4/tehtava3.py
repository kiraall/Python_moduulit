max, min = 0, None
while True:
    luku = input("Anna luku:")
    if luku == " ":
        print("Ei ole luku")
        break
    luku = int(luku)
    if min is None or luku < min:
        min = luku
    if luku > max:
        max = luku
print(f"Pienin luku: {min}")
print(f"Suurin luku: {max}")