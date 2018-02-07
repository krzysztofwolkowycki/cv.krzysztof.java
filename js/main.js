
var name = "Krzysztof Wolkowycki";
var stanowisko = "Kierownik dzialu mechaniczno - elektrycznego";

var head = document.getElementById("head");
head.innerHTML = name;
var head2 = document.getElementById("head2");
head2.innerHTML = stanowisko;

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

var data = ["Data urodzenia: 10.11.1990", "Adres: Bialystok, ul. Zdrowa", "Telefon: +48 799 221 990", "e-mail: krzysztof.wolkowycki@interia.pl"];
 function danemoje() {
    var el3 = document.getElementById("me");
    for (var i = 0; i < data.length; i++) {
        //el.innerHTML += "<li>" + lista[i] + "</li>";
        var entery = document.createElement("li");
        entery.appendChild(document.createTextNode(data[i]));
        el3.appendChild(entery);
    }
}
/*
var formularz = document.getElementById("osobowe");
var poleform = Array();
poleform["Data_urodzenia"] = "10.11.1990";
poleform["Adres"] = "Bia³ystok, ul. Puchatka 10";
poleform["Komorka"] = "+48 799 221 990";
poleform["email"] = "wolkowycki.k@gmail.com";

formularz.onclick = function () {
    for (var i = 0; i<poleform pole in poleform) {
        var el = document.getElementById("pole");
        el.value = poleform[pole];
    }
}
*/
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
    table.id = "tabjeden";
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
    el1.removeChild(document.getElementById("tabjeden"));
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
    el1.removeChild(document.getElementById("tabjeden"));
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
var hobbylist = ["pilka nozna", "siatkowka", "pilka reczna", "muzyka", "nowinki technologiczne"];
//var sport = ["pilka nozna", "siatkowka", "pilka reczna"];
function hobby() {
    var el4 = document.getElementById("hobbyhtml");
    
    for (var i = 0; i < hobbylist.length; i++) {
        /*
        for (var j = 0; j < sport.length; j++) {
            var el5 = document.getElementById("sporthtml");
            var entery = document.createElement("li");
            entery.appendChild(document.createTextNode(sport[j]));
            el5.appendChild(entery);
        }*/
        //el.innerHTML += "<li>" + lista[i] + "</li>";
        var entery = document.createElement("li");
        entery.appendChild(document.createTextNode(hobbylist[i]));
        el4.appendChild(entery);

    }
}
var el2 = document.getElementById("tableedu");
function budujTab2(arg) {
    var table = document.createElement("table");
    table.id = "tabdwa";
    document.body.appendChild(table);
    el2.appendChild(table);

    var row, cell;
    for (i = 0; i < dane.length; ++i) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.textContent = arg[i].okres;

        cell = row.insertCell();
        cell.textContent = arg[i].szkola;

        cell = row.insertCell();
        cell.textContent = arg[i].rodzaj;

    }

}
var dane2 = [
    { okres: "2013-2014", szkola: "Wyzsza Szkola Finasow i Zarzadzanie w Bialymstoku - Zarzadzanie Bezpieczenstwem i Higiena Pracy", rodzaj: "Studia podyplomowe, zaoczne" },
    { okres: "2013-2014", szkola: "Politechnika Bialostocka - Zarzadzanie i Inzynieria Produkcji", rodzaj: "Studia magisterskie, stacjonarne; Specjalizacja: Broker Technologii" },
    { okres: "2009-2013", szkola: "Politechnika Bialostocka - Zarzadzanie i Inzynieria Produkcji", rodzaj: "Studia inzynierskie, stacjonarne" },
];
budujTab2(dane2);

function getRVBN(n) {
    var i, r = document.getElementsByName(n);
    for (i = 0; i < r.length; i++) {
        if (r[i].checked) return r[i].value;
    }
    return '';
}

function getValues() {
    var g = getRVBN('gender');
    alert(g);
}
document.querySelector('email').addEventListener('change', function () {
    const emailAddress = 'errorField';
    const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

    if (!mailReg.test(this.value)) {
        this.classList.add(emailAddress); 
    } else {
        this.classList.remove(emailAddress);
    }
});
document.querySelector('name').addEventListener('change', function () {
    const tekst = 'error-field';
    const reg = new RegExp('^[a-zA-Z]{3,}$', 'g');

    if (!reg.test(this.value)) {
        this.classList.add(tekst);
    } else {
        this.classList.remove(tekst);
    }
});
console.log(document.querySelector('name'));
