function kiir(szoveg) {
    var kerdes = document.getElementById("kerdes").getElementsByTagName("p");
    kerdes[0].innerHTML = szoveg;
}

var kerdesek = [["Hogyan keződik? \"... a gőzmozdony\"", 2, "Persi", "Thomas", "Bob", "Chuggington"], ["Mit szeret Micimackó a leginkább?", 1, "Méz", "Eper", "Csoki", "Tejszínhab"], ["Mennyi a következő egyenlet megoldása: 2*(3+4)/7", 4, "3.3", "1", "7", "2"], ["Hogy hívtak majdnem mindenkit a Rrrrrrrrr c. filmben?", 2, "Béla", "Pali", "Szőke", "Jani"], ["A sárga és a kék szín keverésével milyen színt kapunk?", 1, "Zöld", "Piros", "Kék", "Lila"], ["Milyen kategóriájú jogosítvánnyal lehet személygépkocsit vezetni?", 2, "A", "B", "C", "D"], ["Melyik képzeletbeli város Batman otthona?", 4, "New York", "Budapest", "Joker", "Gotham"], ["Hány csoda van a világon?", 3, "1", "3", "7", "12"], ["Milyen magas a Mt. Everest?", 1, "8848 m", "9659 m", "13027 m", "15984 m"], ["Milyen színű a kör a japán nemzeti zászlóban?", 1, "Piros", "Kék", "Sárga", "Zöld"]];
var jovalasz;
var vanvalasz = false;
var jogomb;
var rosszvalasz;
var nyomott;

function init() {
    var tomb = kerdesek[(Math.floor(Math.random() * (9)))];
    var kerdes = tomb[0];
    kiir(kerdes);
    vanvalasz = false;
    jovalasz = tomb[1];
    var lehetosegek = document.getElementsByClassName("valasz");
    for (var i = 0; i < 4; i++) {
        lehetosegek[i].innerHTML = tomb[i + 2];
    }
}

function ellenorzes(gomb) {
    nyomott = gomb;
    if (!vanvalasz) {
        var nyomottgomb = document.getElementById(gomb);
        nyomottgomb.style.backgroundColor = "yellow";
        vanvalasz = true;
    }

    switch (jovalasz) {
        case 1:
        {
            jogomb = "elso";
            break;
        }
        case 2:
        {
            jogomb = "masodik";
            break;
        }
        case 3:
        {
            jogomb = "harmadik";
            break;
        }
        case 4:
        {
            jogomb = "negyedik";
            break;
        }
    }

    if (gomb !== jogomb)
        setTimeout(piros, 2000);
    setTimeout(johet, 2000);
}

function johet() {
    var nyomottgomb = document.getElementById(jogomb);
    nyomottgomb.style.backgroundColor = "green";
}

function piros(){
    var nyomottgomb = document.getElementById(nyomott);
    nyomottgomb.style.backgroundColor = "red";
}
