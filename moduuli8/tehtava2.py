import random

arvaus = random.randint(1, 5)

kysymys = int(input("Veikka numero"))

if arvaus == kysymys:
    print("Onneksi olkoon sä arvisit!")

elif arvaus > kysymys:
    print("Pienempi")

elif arvaus < kysymys:
    print("Isompi")

else:
    print("VÄÄRIN")



