kuukaudet = ("talvi", "talvi", "talvi", "kevät", "kevät", "kevät", "kesä", "kesä", "kesä", "syksy", "syksy", "syksy")
järjestysnumero = int(input("Anna viikonpäivän järjestysnumero (1-7): "))
kuukausi = kuukaudet[järjestysnumero-1]
print (f"{järjestysnumero}. kuukausi on {kuukausi}.")