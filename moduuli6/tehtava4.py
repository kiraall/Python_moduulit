def summaa_lista(lista):
    return sum(lista)

def main():

    luvut = [1, 2, 3, 4, 5]
    summa = summaa_lista(luvut)
    print(f"Listan {luvut} summa on {summa}.")


if __name__ == "__main__":
    main()
