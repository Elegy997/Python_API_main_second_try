import sqlite3

con = sqlite3.connect("employee.db")
print("Database opened successfully")

con.execute(
    "CREATE TABLE Cars (id INTEGER PRIMARY KEY AUTOINCREMENT, marka TEXT NOT NULL, ev TEXT NOT NULL UNIQUE, km TEXT NOT NULL, hasznalt TEXT NOT NULL, muszaki	TEXT, rendszam	TEXT, motor TEXT, loero TEXT, gyorsulas TEXT, sebesseg TEXT, fordulat TEXT, suly TEXT, sebvaltoTipus TEXT, sebvaltoSzam TEXT, fogyasztas TEXT, benzin TEXT, biztonsag TEXT, atalakitas TEXT, kiegeszites TEXT)")

print("Table created successfully")

con.close()
