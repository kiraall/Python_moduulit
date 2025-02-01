luvut = []

luku = input("Anna luku: ")
while luku != "":
    luvut.append(luku)
    luku = input("Anna luku: ")
luvut.sort(reverse=True)
print(luvut)