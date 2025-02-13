import mysql.connector

yhteys = mysql.connector.connect(
         host='localhost',
         port= 3306,
         database='flight_game',
         user='kirill',
         password='Metro2033',
         autocommit=True,
         collation="utf8mb4_unicode_ci",
         )

x = input("Anna lentokentän koodi: ")

sql = (f"SELECT airport.type, COUNT(*) "
       f"FROM airport "
       f"inner JOIN country ON airport.iso_country = country.iso_country "
       f"WHERE country.iso_country = '{x}' "
       f"GROUP BY airport.type ")

kursori = yhteys.cursor()
kursori.execute(sql)
tulos = kursori.fetchall()

print(tulos)