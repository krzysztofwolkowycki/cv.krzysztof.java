function zaloguj() {
    var imie = document.getElementById("head");
    var stanowisko = document.getElementById("head2");
    imie.innerHTML = "Krzysztof Wolkowycki";
    stanowisko.innerHTML = "Kierownik dzialu mechaniczno - elektrycznego";
}
var zdjecie = document.getElementById("przycisk");
var chowaj = document.getElementById("niema");
zdjecie.onclick = function () {
    var el = document.getElementById("look");
    el.src = "images/icon.png";
    el.setAttribute("width", "150");
    el.setAttribute("height", "150");
    el.setAttribute("alt", "Krzysztof Wo³kowycki");
}
chowaj.onclick = function () {
    var el = document.getElementById("look");
    el.style.display = "none";
}
var formularz = document.getElementById("osobowe");
var poleform = Array();
poleform["Data_urodzenia"] = "10.11.1990";
poleform["Adres"] = "Bia³ystok, ul. Puchatka 10";
poleform["Komorka"] = "+48 799 221 990";
poleform["email"] = "wolkowycki.k@gmail.com";

formularz.onclick = function () {
    for (var pole in poleform) {
        var el = document.getElementById("pole");
        el.value = poleform[pole];
    }
}

var komp = document.getElementById("kompetencje");
var lista = ["zarzadzanie grupa 40 osob", "prawo jazdy kat. B", "ukonczenie kursu Akademia Kreatywnego Projektowania Solid Works", "zdobycie certyfikatu SolidWorks Mechanical Design Associate", "obsluga pakietow Microsoft Office, SAP i Softlab ERP, Autodesk", "ukonczenie kursu Akademia Produkcji Lean Manufacturing", "uprawnienia Elektryczne SEP - dozor do 15 kV", "cieplne Grupa 2 - dozor ", "gazowe Grupa 3 - dozor i eksploatacja"];
komp.onclick = function () {
    var el = document.getElementById("komplist");
    for (var i = 0; i < lista.length; i++) {
        //el.innerHTML += "<li>" + lista[i] + "</li>";
        var entery = document.createElement("li");
        entery.appendChild(document.createTextNode(lista[i]));
        el.appendChild(entery);
    }
}