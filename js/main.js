function zaloguj() {
    var imie = document.getElementById("head");
    var stanowisko = document.getElementById("head2");
    imie.innerHTML = "Krzysztof Wolkowycki";
    stanowisko.innerHTML = "Kierownik dzialu mechaniczno - elektrycznego";
}
var dn = document.getElementById("pokaz")
var zawartosc = document.getElementById("dane");
dn.onclick = function () {
    if (zawartosc.hidden === true) {
        zawartosc.hidden = false;
        dn.value = "Ukryj";
    }
    else {
        zawartosc.hidden = true;
        dn.value = "Pokaz";
    }
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
/*
var btn = document.getElementById("przyklad");

btn.onclick = */
	var el1 = document.getElementById("tabledosw");
	function budujTab(ar) {
    var table = document.createElement("table");
    document.body.appendChild(table);
	el1.appendChild(table);
    var row, cell;
    for (i = 0; i < dane.length; ++i) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.textContent = ar[i].okres;

        cell = row.insertCell();
        cell.textContent = ar[i].zaklad;

        cell = row.insertCell();
        cell.textContent = ar[i].stanowisko;

        cell = row.insertCell();
        cell.textContent = ar[i].zakres;
    }
	
}
var dane = [
    { okres: "02.01.2018 - obecnie", zaklad: "Huta Szkla Biaglass Bialystok", stanowisko:"Kierownik Dzialu Mechaniczno - Energetycznego", zakres: "Nadzor nad praca podleglego dzialu; Utrzymanie ruchu zakladu; Nadzor nad sprawnoscia maszyn i urzadzen w procesie produkcji; Nadzor nad urzadzeniami dozorowymi; Nadzor nad infrastruktura (budynki, sieci: energetyczne, gazowe, cieplne)." },
    { okres: "22.01.2014 - 29.12.2017", zaklad: "Huta Szkla Biaglass Bialystok", stanowisko: "Mistrz zmianowy", zakres: "Odpowiedzialnosc za realizacje planu produkcyjnego i biezace rozliczenie pracownikow z czasu pracy, organizacja pracy wydzialu i monitorowanie jego wynikow, ciagla wspolpraca z dzialem kontroli jakosci, kierowanie i motywowanie 40 osobowej grupy pracownikow, wprowadzenie realizowanych zlecen do systemu ERP." },
    { okres: "01.06.2012 - 31.07.2012", zaklad: "Kompania Piwowarska, Browar Dojlidy", stanowisko: "Aparatowy do rozlewu piwa", zakres: "Profesjonalna obsluga oraz konserwacja maszyn i urzadzen linii rozlewniczej, praca zgodnie z zasadami Lean Management." },
    { okres: "01.06.2009 - 30.09.2009", zaklad: "Altrad Poland", stanowisko: "Pomocnik produkcyjny", zakres: "Przygotowywanie dokumentacji technicznej wykonanych wyrobow, skrecanie oraz pakowanie czesci maszyn budowlanych" },
];
budujTab(dane);


document.getElementById("sortzak").onclick = function () {
    dane.sort(function (a, b) {
        if (a.zaklad < b.zaklad) {
            return -1;
        }
        if (a.zaklad > b.zaklad) {
            return 1;
        }
        return 0;
    });
    el1.removeChild(document.querySelector("table"));
    budujTab(dane);
}

document.getElementById("sortstan").onclick = function () {
    dane.sort(function (a, b) {
        if (a.stanowisko < b.stanowisko) {
            return -1;
        }
        if (a.stanowisko > b.stanowisko) {
            return 1;
        }
        return 0;
    });
    el1.removeChild(document.querySelector("table"));
    budujTab(dane);
}

/*
var dane = [
    { okres: "02.01.2018 - obecnie", zaklad: "Huta Szkla Biaglass Bialystok", stanowisko: "Kierownik Dzialu Mechaniczno - Energetycznego", zakres: "Nadzor nad praca podleglego dzialu; Utrzymanie ruchu zakladu; Nadzor nad sprawnoscia maszyn i urzadzen w procesie produkcji; Nadzor nad urzadzeniami dozorowymi; Nadzor nad infrastruktura (budynki, sieci: energetyczne, gazowe, cieplne)." },
    { okres: "22.01.2014 - 29.12.2017", zaklad: "Huta Szkla Biaglass Bialystok", stanowisko: "Mistrz zmianowy", zakres: "Odpowiedzialnosc za realizacje planu produkcyjnego i biezace rozliczenie pracownikow z czasu pracy, organizacja pracy wydzialu i monitorowanie jego wynikow, ciagla wspolpraca z dzialem kontroli jakosci, kierowanie i motywowanie 40 osobowej grupy pracownikow, wprowadzenie realizowanych zlecen do systemu ERP." },
    { okres: "01.06.2012 - 31.07.2012", zaklad: "Kompania Piwowarska, Browar Dojlidy", stanowisko: "Aparatowy do rozlewu piwa", zakres: "Profesjonalna obsluga oraz konserwacja maszyn i urzadzen linii rozlewniczej, praca zgodnie z zasadami Lean Management." },
    { okres: "01.06.2009 - 30.09.2009", zaklad: "Altrad Poland", stanowisko: "Pomocnik produkcyjny", zakres: "Przygotowywanie dokumentacji technicznej wykonanych wyrobow, skrecanie oraz pakowanie czesci maszyn budowlanych" },
];
var btn = document.getElementById("przyklad");
btn.onclick = function (ar) {
    var el = document.getElementById("tabelka");
    var table = document.createElement("table");

    var row = document.createElement("tr");
    for (var i = 0; i < dane.length; i++) {
        var col = document.createElement("td");
        col.appendChild(document.createTextNode(dane[i]));
        row.appendChild(col);
    }
    table.appendChild(row);
    var row = document.createElement("tr");
    for (i = 0; i < dane.length; i++) {
        var col = document.createElement("td");
        col.appendChild(document.createTextNode(dane[i]));
        row.appendChild(col);
    }
    table.appendChild(row);
    el.appendChild(table);
}
*/