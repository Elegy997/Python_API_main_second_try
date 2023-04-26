function sendPost() {
  const data = JSON.stringify({
    marka: document.getElementById("marka").value,
    ev: document.getElementById("ev").value,
    km: document.getElementById("marka").value,
    hasznalt: document.getElementById("hasznalt").value,
    muszaki: document.getElementById("muszaki").value,
    rendszam: document.getElementById("rendszam").value,
    motor: document.getElementById("motor").value,
    loero: document.getElementById("loero").value,
    gyorsulas: document.getElementById("gyorsulas").value,
    sebesseg: document.getElementById("sebesseg").value,
    fordulat: document.getElementById("fordulat").value,
    suly: document.getElementById("suly").value,
    sebvaltoTipus: document.getElementById("sebvaltoTipus").value,
    sebvaltoSzam: document.getElementById("sebvaltoSzam").value,
    fogyasztas: document.getElementById("fogyasztas").value,
    benzin: document.getElementById("benzin").value,
    biztonsag: document.getElementById("biztonsag").value,
    atalakitas: document.getElementById("atalakitas").value,
    kiegeszites: document.getElementById("kiegeszites").value,
  });

  navigator.sendBeacon("http://127.0.0.1:5000/savedetails/", data);
  console.log(data);
}
