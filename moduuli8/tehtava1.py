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

sql = (f"select country.name, airport.name "
       f"from airport, country "
       f"where airport.iso_country=country.iso_country and airport.ident='{x}';"

)

kursori = yhteys.cursor()
kursori.execute(sql)
tulos = kursori.fetchall()

print(tulos)
