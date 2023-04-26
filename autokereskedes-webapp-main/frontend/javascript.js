var url = "http://127.0.0.1:5000/view";
var id = "view";

//addig vár, amíg nem null a visszatérési érték, while-ban van a késleltetés
//semmi sincs azonnal, csak nem mindig van jelentősége
async function generator(url, id) {
  var request = await new XMLHttpRequest(); // várja be az objektumot(?)
  //ebben van, hogy hanyas kódú a request, 200, 404, 300, stb. 300's: valami kulcsot vár

  request.open("GET", url, true);
  //onload: megkpjuk a request-re adott választ
  request.onload = function () {
    // Begin accessing JSON data here
    //JSON-t alakítjuk dictionaryk-ké
    var data = JSON.parse(this.response);
    view(data, request, id);
  };

  request.send();
}

function view(data, request, id) {
  if (id == "view") {
    //ez egy régebbi oldalból maradt fenn (id=="view")
    if (request.status >= 200 && request.status < 400) {
      // query = item
      data.forEach((query) => {
        console.log(request.status);
        var div = document.createElement("tr"); // itt igazából nem divek vannak, hanem tr-ek
        //createElement: egy sor a táblázatban
        var mainContainer = document.getElementById(id);
        //query: item a foreach-ből, az id az egy attribútum(?),
        // list-ben dictionary-k,
        // dictionary: funkció nélküli objektum
        div.innerHTML =
          /* ID */
          "<td class='hatter'>" +
          query.id +
          "</td>" +
          /* Márka, típus */
          "<td class='hatter'><input id='marka" +
          query.id +
          "' placeholder='" +
          query.marka +
          "' value='" +
          query.marka +
          "'/></td>" +
          /* Gyártási év */
          "<td class='hatter'><input id='ev" +
          query.id +
          "' placeholder='" +
          query.ev +
          "' value='" +
          query.ev +
          "'/></td>" +
          /* km-ek száma */
          "<td class='hatter'><p>" +
          query.km +
          " km</p><input id='km" +
          query.id +
          "' placeholder='" +
          query.km +
          "' value='" +
          query.km +
          "'/></td>" +
          /* Minek használták előtte */
          "<td class='hatter'><input id='hasznalt" +
          query.id +
          "' placeholder='" +
          query.hasznalt +
          "' value='" +
          query.hasznalt +
          "'/></td>" +
          /* Műszaki vizsga érvényessége */
          "<td class='hatter'><input id='muszaki" +
          query.id +
          "' placeholder='" +
          query.muszaki +
          "' value='" +
          query.muszaki +
          "'/></td>" +
          /* Rendszám */
          "<td class='hatter'><input id='rendszam" +
          query.id +
          "' placeholder='" +
          query.rendszam +
          "' value='" +
          query.rendszam +
          "'/></td>" +
          /* Motor mérete */
          "<td class='hatter'><p>" +
          query.motor +
          " cm3</p><input id='motor" +
          query.id +
          "' placeholder='" +
          query.motor +
          "' value='" +
          query.motor +
          "'/></td>" +
          /* Lóerők száma */
          "<td class='hatter'><input id='loero" +
          query.id +
          "' placeholder='" +
          query.loero +
          "' value='" +
          query.loero +
          "'/></td>" +
          /* Gyorsulás */
          "<td class='hatter'><p>" +
          query.gyorsulas +
          " s</p><input id='gyorsulas" +
          query.id +
          "' placeholder='" +
          query.gyorsulas +
          "' value='" +
          query.gyorsulas +
          "'/></td>" +
          /* Végsebesség */
          "<td class='hatter'><p>" +
          query.sebesseg +
          " km/h</p><input id='sebesseg" +
          query.id +
          "' placeholder='" +
          query.sebesseg +
          "' value='" +
          query.sebesseg +
          "'/></td>" +
          /* Maximális fordulatszám */
          "<td class='hatter'><input id='fordulat" +
          query.id +
          "' placeholder='" +
          query.fordulat +
          "' value='" +
          query.fordulat +
          "'/></td>" +
          /* Súly */
          "<td class='hatter'><p>" +
          query.suly +
          " kg</p><input id='suly" +
          query.id +
          "' placeholder='" +
          query.suly +
          "' value='" +
          query.suly +
          "'/></td>" +
          /* Sebváltó típusa */
          "<td class='hatter'><input id='sebvaltoTipus" +
          query.id +
          "' placeholder='" +
          query.sebvaltoTipus +
          "' value='" +
          query.sebvaltoTipus +
          "'/></td>" +
          /* Sebességek száma */
          "<td class='hatter'><input id='sebvaltoSzam" +
          query.id +
          "' placeholder='" +
          query.sebvaltoSzam +
          "' value='" +
          query.sebvaltoSzam +
          "'/></td>" +
          /* Fogyasztás */
          "<td class='hatter'><p>" +
          query.fogyasztas +
          " l</p><input id='fogyasztas" +
          query.id +
          "' placeholder='" +
          query.fogyasztas +
          "' value='" +
          query.fogyasztas +
          "'/></td>" +
          /* Benzin típusa */
          "<td class='hatter'><input id='benzin" +
          query.id +
          "' placeholder='" +
          query.benzin +
          "' value='" +
          query.benzin +
          "'/></td>" +
          /* Biztonság */
          "<td class='hatter'><input id='biztonsag" +
          query.id +
          "' placeholder='" +
          query.biztonsag +
          "' value='" +
          query.biztonsag +
          "'/></td>" +
          /* Átalakítás */
          "<td class='hatter'><input id='atalakitas" +
          query.id +
          "' placeholder='" +
          query.atalakitas +
          "' value='" +
          query.atalakitas +
          "'/></td>" +
          /* Kiegészítés */
          "<td class='hatter'><input id='kiegeszites" +
          query.id +
          "' placeholder='" +
          query.kiegeszites +
          "' value='" +
          query.kiegeszites +
          "'/></td>" +
          /* A két gomb */
          "<button onclick = 'deleterecord(" +
          query.id +
          ")' type = 'submit' value='Submit'>Delete</button>" +
          "<button onclick = 'update(" +
          query.id +
          ")'>Update</button>";
        mainContainer.appendChild(div);
      });
    } else {
      console.log("error");
    }
  }
}

async function generate_html() {
  await generator(url, id);
}

function deleterecord(id) {
  const data = JSON.stringify({
    id: parseInt(id),
  });

  //itt küldi át a @deleterecord-ra
  navigator.sendBeacon("http://127.0.0.1:5000/deleterecord/", data);
  console.log(data);
}
function update(id) {
  const data = JSON.stringify({
    id: id,
    //name: oszlop, id: sor
    marka: document.getElementById("marka" + id).value,
    ev: document.getElementById("ev" + id).value,
    km: document.getElementById("km" + id).value,
    hasznalt: document.getElementById("hasznalt" + id).value,
    muszaki: document.getElementById("muszaki" + id).value,
    rendszam: document.getElementById("rendszam" + id).value,
    motor: document.getElementById("motor" + id).value,
    loero: document.getElementById("loero" + id).value,
    gyorsulas: document.getElementById("gyorsulas" + id).value,
    sebesseg: document.getElementById("sebesseg" + id).value,
    fordulat: document.getElementById("fordulat" + id).value,
    suly: document.getElementById("suly" + id).value,
    sebvaltoTipus: document.getElementById("sebvaltoTipus" + id).value,
    sebvaltoSzam: document.getElementById("sebvaltoSzam" + id).value,
    fogyasztas: document.getElementById("fogyasztas" + id).value,
    benzin: document.getElementById("benzin" + id).value,
    biztonsag: document.getElementById("biztonsag" + id).value,
    atalakitas: document.getElementById("atalakitas" + id).value,
    kiegeszites: document.getElementById("kiegeszites" + id).value,
  });

  //route -> main.py-ból
  navigator.sendBeacon("http://127.0.0.1:5000/updatedetails/", data);
  console.log(data);
}

generate_html();
