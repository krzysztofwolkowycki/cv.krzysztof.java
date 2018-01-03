function bigImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}

function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}

function zaloguj() {
    var imie = document.getElementById("head");
    var stanowisko = document.getElementById("head2");
    imie.innerHTML = "Krzysztof Wolkowycki";
    stanowisko.innerHTML = "Kierownik dzialu mechaniczno - elektrycznego";
}
var fota = document.getElementById("zdjecie");
fota.onmouseover = podswietl;
fota.onmouseout = wygas;

function podswietl(ev) {
    fota.scr = 
 
}
function wygas(ev) {

    ev.target.style.background = null;
}
