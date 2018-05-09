function kiir(szoveg) {
    var kerdes = document.getElementById("kerdes").getElementsByTagName("p");
    kerdes[0].innerHTML = szoveg;
}

var kerdesek = [[["Hogyan keződik? \"... a gőzmozdony\"", 2, "Persi", "Thomas", "Bob", "Chuggington"], ["Mit szeret Micimackó a leginkább?", 1, "Méz", "Eper", "Csoki", "Tejszínhab"], ["Mennyi a következő egyenlet megoldása: 2*(3+4)/7", 4, "3.3", "1", "7", "2"], ["Hogy hívtak majdnem mindenkit a RRRrrrr!!! c. filmben?", 2, "Béla", "Pali", "Szőke", "Jani"], ["A sárga és a kék szín keverésével milyen színt kapunk?", 1, "Zöld", "Piros", "Kék", "Lila"], ["Milyen kategóriájú jogosítvánnyal lehet személygépkocsit vezetni?", 2, "A", "B", "C", "D"], ["Melyik képzeletbeli város Batman otthona?", 4, "New York", "Budapest", "Joker", "Gotham"], ["Hány csoda van a világon?", 3, "1", "3", "7", "12"], ["Milyen magas a Mt. Everest?", 1, "8848 m", "9659 m", "13027 m", "15984 m"], ["Milyen színű a kör a japán nemzeti zászlóban?", 1, "Piros", "Kék", "Sárga", "Zöld"]],
               [["Melyik ország fõvárosa Helsinki?", 1, "Finnország", "Svédország", "Portugália", "Magyarország"],["Hogy hívták János Vitézt a mû elején?", 2, "Medve Jancsi", "Kukorica Jancsi", "Rigó Jancsi", "Macska Jancsi"],["Ki fedezte fel a C-vitamint?", 3, "Semmelweis Ignác", "Horváth György", "Szent-Györgyi Albert", "Czeizel Endre"],["Mit jelent a gábli szó?", 4, "folyosó", "vizipipa", "galuska", "villásreggeli"],["Mit jelent az angol always szó?", 1, "mindig", "soha", "egyedül", "együtt"],["Mi a szelfi?", 2, "önsajnáltatás", "önfotó", "önámítás", "önéletrajz"],["Milyen autómárka a Ferrari?", 3, "német", "angol", "olasz", "spanyol"],["Milyen jármû a csámesz?", 4, "légi", "vasúti", "földalatti", "vízi"],["Mikor lett vége a Szomszédok c. teleregénynek?", 1, "1999", "1998", "1997", "1996"],["Kinek a mûve a Mona Lisa?", 2, "Munkácsy Mihály", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"]],
               [["Melyik szobrász alkotása a Diszkoszvetõ?", 3, "Pheidiasz", "Polükleitosz", "Mürón", "Zeusz"],["Mikor és hol rendezték meg az elsõ nyári olimpiai játékokat?", 4, "1908 London", "932 Los Angeles", "1892 Athén", "1896 Athén"],["Mi alapján tájékozódik a delfin?", 1, "visszhang", "ultrahang", "mágneses tér", "látás"],["Mikor jelent meg Magyarországon a Pokémon Go játék?", 2, "2016 június 2-án", "2016. július 16-án", "2016. július 22-én", "2016. július 14-én"],["Mi a kõolaj fõ összetevõje?", 3, "szén-dioxid", "szén-diszulfid", "szénhidrogén", "szén-monoxid"],["Hány évada volt a Jóbarátok c. amerikai sorozatnak?", 3, "6", "8", "10", "12"],["Ki volt a Forrest Gump c. film fõszereplõje?", 4, "Tim Robbins", "Mel Gibson", "Daniel Arnolds", "Tom Hanks"],["Mi volt Bud Spencer eredeti neve?", 1, "Carlo Pedersoli", "Mario Girotti", "Carlo Girotti", "Mario Pedersoli"],["Milyen az éghajlata Caracasnak?", 2, "mediterrán", "trópusi szavanna", "óceáni", "száraz sivatagi"],["Mit jelent a Carpe diem! latin közmondás?", 3, "Amíg élek, remélek.", "Ne ítélj, hogy ne ítéltess!", "Élj a mának!", "Egyszer élsz!"]],
               [["Hány méter magas a Pilis?", 4, "848 m", "654 m", "782 m", "756 m"],["Hány csigolyából áll a zsiráf nyaka?", 1, "7", "17", "27", "37"],["Hol rendezték meg a 2016-os kajak-kenu Európa-bajnokságot?", 2, "Londonban", "Moszkvában", "Párizsban", "Budapesten"],[],[],[],[],[],[],[]],
               [["Melyik az Európai Unió legkisebb tagállama?", 1, "Málta", "Ciprus", "Litvánia", "Lettország"],["Melyik törzsbe tartoznak a tengericsillagok?", 2, "elõgerinchúrosok", "tüskésbõrûek", "csalánozók", "gyűrűsférgek"],["Melyik évben lett világbajnok Talmácsi Gábor?", 1, "2007-ben", "2008-ban", "2009-ben", "2010-ben"],[],[],[],[],[],[],[]],
               [["Melyik város polgármestere Borkai Zsolt, olimpiai bajnok tornász?", 2, "Pécs", "Győr", "Sopron", "Debrecen"],["Mitõl rózsaszín a flamingó?", 3, "moszatoktól", "piros algától", "garnélaráktól", "iszaptól"],["Ki nyerte a 2016. május 1-i Forma 1-es futamot (orosz nagydíj)?", 4, "Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Nico Rosberg"],[],[],[],[],[],[],[]],
               [["Mi Esztergom partnervárosa?", 3, "Szentes", "Szeged", "Szekszárd", "Szenthalombatta"],["Hány tonna egy kék bálna?", 4, "98", "125", "152", "173"],["Maradona hányas mezt viselt?", 2, "9-es", "10-es", "11-es", "12-es"],[],[],[],[],[],[],[]],
               [["Melyik országhoz tartoznak a Galápagos-szigetek?", 4, "Brazíliához", "Peruhoz", "Kolumbiához", "Ecuadorhoz"],["Mekkora a leghosszabb uborka a Guinness Rekordok Könyvében?", 1, "119,38 cm", "56,78 cm", "234,56 cm", "152,32 cm"],["Repka Attila, bírkózó melyik olimpián nyert aranyérmet?", 2, "1992, Barcelona", "1996, Atlanta", "2000, Sydney", "2004, Athén"],[],[],[],[],[],[],[]],
               [["Hol található a Tien-San hegység?", 1, "Közép-Ázsiában", "Dél-Amerikában", "Afrikában", "Kelet-Ázsiában"],["Milyen állat a gaur?", 2, "hüllő", "emlős", "madár", "kétéltű"],["Mikor született Kincsem a „csodakanca”?", 3, "1897. március 17-én", "1923. március 17-én", "1874. március 17-én", "1902. március 17-én"],["Ki volt az év sportolónõje 2007-ben?", 4, "Nagy Tímea", "Hosszú Katinka", "Mincza-Nébald Ildikó", "Szávay Ágnes"],[],[],[],[],[],[]],
               [["Mi Zimbabwe fõvárosa?", 2, "Jodane", "Harare", "Maputo", "Dodoma"],["Milyen állat az addax?", 3, "krokodil", "aligátor", "antilop", "jaguár"],["Hány világbajnoki címe van Alain Prost autóversenyzőnek?", 4, "három", "hat", "kettő", "négy"],[],[],[],[],[],[],[]]];
var jovalasz;
var vanvalasz = false;
var jogomb;
var rosszvalasz;
var nyomott;
var kerdesSzama = 0;
var helyzetek;
var forint = 1;
var forintok;
var nyeremeny = "0 Ft";

function init() {


    var helyzetBlokk = document.getElementById("helyzetBlokk");
    var nyeremenyBlokk = document.getElementById("nyeremenyBlokk");
    for (var i = 1; i < 11; i++) {
        helyzetBlokk.innerHTML += "<div class='test'>" + (i) + ". kérdés</div>";  
        if(i%5===0) nyeremenyBlokk.innerHTML += "<div class='penz' style='background-color: brown;'>" + forint*10 +" Ft</div>";
        else nyeremenyBlokk.innerHTML += "<div class='penz'>" + forint*10 +" Ft</div>";
        forint*=10;
    }
    betoltes();

}

function betoltes() {
    var tomb = kerdesek[kerdesSzama][(Math.floor(Math.random() * (9)))];
    var kerdes = tomb[0];
    kiir(kerdes);
    vanvalasz = false;
    jovalasz = tomb[1];
    var lehetosegek = document.getElementsByClassName("valasz");
    for (var i = 0; i < 4; i++) {
        lehetosegek[i].innerHTML = tomb[i + 2];
        lehetosegek[i].style.backgroundColor = "#C0C0C0";
    }

    helyzetek = document.getElementsByClassName("test");
    forintok = document.getElementsByClassName("penz");

    helyzetek[kerdesSzama].style.backgroundColor = "yellow";
    helyzetek[kerdesSzama].style.color = "black";
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
    if (nyomott === jogomb) {
        if((kerdesSzama+1)%5===0 && kerdesSzama>2){
            forintok[kerdesSzama].style.backgroundColor = "darkgreen";
            nyeremeny=forintok[kerdesSzama].innerHTML;
        }
        else forintok[kerdesSzama].style.backgroundColor = "green";
        helyzetek[kerdesSzama++].style.backgroundColor = "green";
        if(kerdesSzama!==10)
        setTimeout(betoltes, 2000);
        else ujra();
    }

}

function piros() {
    var nyomottgomb = document.getElementById(nyomott);
    nyomottgomb.style.backgroundColor = "red";
    helyzetek[kerdesSzama++].style.backgroundColor = "red";
    setTimeout(rossz, 2000);
}

function rossz() {
    var valaszok = document.getElementById("valaszok");
    valaszok.innerHTML = "<div id='vegeSzoveg'>A játék véget ért! Nyereménye: "+nyeremeny+"</div>";
    valaszok.innerHTML += "<div id='ujra' onclick='ujra();'>Újra</div>";
}

function ujra() {
    window.location.reload(false);
}