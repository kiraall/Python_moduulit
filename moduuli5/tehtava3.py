num = int(input("Anna kokonaisluku: "))

if num > 1:


    for i in range(2, (num // 2) + 1):
        if (num % i) == 0:
            print(num, "Se ei ole alkuluku")
            break
    else:
        print(num, "Se on alkuluku")
else:
    print(num, "Se ei ole alkuluku")

