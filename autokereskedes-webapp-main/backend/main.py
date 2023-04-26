from flask import *
import json
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/view")
def view():
    con = sqlite3.connect("employee.db")
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    cur.execute("select * from Cars")
    rows = cur.fetchall()
    return json.dumps([dict(ix) for ix in rows])

@app.route("/savedetails/", methods=["POST"])
def saveDetails():
    msg = "msg"
    try:
        data = request.get_json(force=True)
        print(data)
        marka = data["marka"]
        ev = data["ev"]
        km = data["km"]
        hasznalt = data["hasznalt"]
        muszaki = data["muszaki"]
        rendszam = data["rendszam"]
        motor = data["motor"]
        loero = data["loero"]
        gyorsulas = data["gyorsulas"]
        sebesseg = data["sebesseg"]
        fordulat = data["fordulat"]
        suly = data["suly"]
        sebvaltoTipus = data["sebvaltoTipus"]
        sebvaltoSzam = data["sebvaltoSzam"]
        fogyasztas = data["fogyasztas"]
        benzin = data["benzin"]
        biztonsag = data["biztonsag"]
        atalakitas = data["atalakitas"]
        kiegeszites = data["kiegeszites"]
        with sqlite3.connect("employee.db") as con:
            cur = con.cursor()
            cur.execute("INSERT into Cars (marka, ev, km, hasznalt, muszaki, rendszam, motor, loero, gyorsulas, sebesseg, fordulat, suly, sebvaltoTipus, sebvaltoSzam, fogyasztas, benzin, biztonsag, atalakitas, kiegeszites) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", (marka, ev, km, hasznalt, muszaki, rendszam, motor, loero, gyorsulas, sebesseg, fordulat, suly, sebvaltoTipus, sebvaltoSzam, fogyasztas, benzin, biztonsag, atalakitas, kiegeszites))
            con.commit()
            msg = "Car successfully Added"
    except:
        con.rollback()
        msg = "We can not add the employee to the list"
    finally:
        return marka
        con.close()

@app.route("/deleterecord/", methods=["POST"])
def deleterecord():
    data = request.get_json(force=True)
    id = str(data["id"])
    print(id)

    #olyan, mint a con = sqlite.connect("employee.db"), de így lehet try catch-et csinálni (ami itt az except)
    with sqlite3.connect("employee.db") as con:
        try:
            cur = con.cursor()
            #?: Amit felsorolsz utána, az a ? (itt az id)
            query = f"delete from Cars where id = '{id}'"
            print(query)
            cur.execute(query)
            print("Sikerült")
            msg = "record successfully deleted"
        except:
            msg = "can't be deleted"
        finally:
            return msg
            con.close()

@app.route("/updatedetails/", methods=["POST"])
def updaterecord():
    try:
        data = request.get_json(force=True)
        print(data)
        id = data["id"]
        marka = data["marka"]
        ev = data["ev"]
        km = data["km"]
        hasznalt = data["hasznalt"]
        muszaki = data["muszaki"]
        rendszam = data["rendszam"]
        motor = data["motor"]
        loero = data["loero"]
        gyorsulas = data["gyorsulas"]
        sebesseg = data["sebesseg"]
        fordulat = data["fordulat"]
        suly = data["suly"]
        sebvaltoTipus = data["sebvaltoTipus"]
        sebvaltoSzam = data["sebvaltoSzam"]
        fogyasztas = data["fogyasztas"]
        benzin = data["benzin"]
        biztonsag = data["biztonsag"]
        atalakitas = data["atalakitas"]
        kiegeszites = data["kiegeszites"]

        with sqlite3.connect("employee.db") as con:
            cur = con.cursor()
            cur.execute("UPDATE Cars SET marka=?, ev=?, km=?, hasznalt=?, muszaki=?, rendszam=?, motor=?, loero=?, gyorsulas=?, sebesseg=?, fordulat=?, suly=?, sebvaltoTipus=?, sebvaltoSzam=?, fogyasztas=?, benzin=?, biztonsag=?, atalakitas=?, kiegeszites=? WHERE id=?", (marka, ev, km, hasznalt, muszaki, rendszam, motor, loero, gyorsulas, sebesseg, fordulat, suly, sebvaltoTipus, sebvaltoSzam, fogyasztas, benzin, biztonsag, atalakitas, kiegeszites, id))
            con.commit()
            msg = "Employee successfully Updated"
    except:
        con.rollback()
        msg = "We can not update the employee to the list"
    finally:
        return msg
        con.close()

if __name__ == "__main__":
    app.run(debug=True)
