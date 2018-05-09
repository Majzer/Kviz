function kiir(szoveg) {
    var kerdes = document.getElementById("kerdes").getElementsByTagName("p");
    kerdes[0].innerHTML = szoveg;
}

var kerdesek = [[["Hogyan keződik? \"... a gőzmozdony\"", 2, "Persi", "Thomas", "Bob", "Chuggington"], ["Mit szeret Micimackó a leginkább?", 1, "Méz", "Eper", "Csoki", "Tejszínhab"], ["Mennyi a következő egyenlet megoldása: 2*(3+4)/7", 4, "3.3", "1", "7", "2"], ["Hogy hívtak majdnem mindenkit a RRRrrrr!!! c. filmben?", 2, "Béla", "Pali", "Szőke", "Jani"], ["A sárga és a kék szín keverésével milyen színt kapunk?", 1, "Zöld", "Piros", "Kék", "Lila"], ["Milyen kategóriájú jogosítvánnyal lehet személygépkocsit vezetni?", 2, "A", "B", "C", "D"], ["Melyik képzeletbeli város Batman otthona?", 4, "New York", "Budapest", "Joker", "Gotham"], ["Hány csoda van a világon?", 3, "1", "3", "7", "12"], ["Milyen magas a Mt. Everest?", 1, "8848 m", "9659 m", "13027 m", "15984 m"], ["Milyen színű a kör a japán nemzeti zászlóban?", 1, "Piros", "Kék", "Sárga", "Zöld"]],
               [["Melyik ország fõvárosa Helsinki?", 1, "Finnország", "Svédország", "Portugália", "Magyarország"],["Hogy hívták János Vitézt a mû elején?", 2, "Medve Jancsi", "Kukorica Jancsi", "Rigó Jancsi", "Macska Jancsi"],["Ki fedezte fel a C-vitamint?", 3, "Semmelweis Ignác", "Horváth György", "Szent-Györgyi Albert", "Czeizel Endre"],["Mit jelent a gábli szó?", 4, "folyosó", "vizipipa", "galuska", "villásreggeli"],["Mit jelent az angol always szó?", 1, "mindig", "soha", "egyedül", "együtt"],["Mi a szelfi?", 2, "önsajnáltatás", "önfotó", "önámítás", "önéletrajz"],["Milyen autómárka a Ferrari?", 3, "német", "angol", "olasz", "spanyol"],["Milyen jármû a csámesz?", 4, "légi", "vasúti", "földalatti", "vízi"],["Mikor lett vége a Szomszédok c. teleregénynek?", 1, "1999", "1998", "1997", "1996"],["Kinek a mûve a Mona Lisa?", 2, "Munkácsy Mihály", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"]],
               [["Melyik szobrász alkotása a Diszkoszvetõ?", 3, "Pheidiasz", "Polükleitosz", "Mürón", "Zeusz"],["Mikor és hol rendezték meg az elsõ nyári olimpiai játékokat?", 4, "1908 London", "932 Los Angeles", "1892 Athén", "1896 Athén"],["Mi alapján tájékozódik a delfin?", 1, "visszhang", "ultrahang", "mágneses tér", "látás"],["Mikor jelent meg Magyarországon a Pokémon Go játék?", 2, "2016 június 2-án", "2016. július 16-án", "2016. július 22-én", "2016. július 14-én"],["Mi a kõolaj fõ összetevõje?", 3, "szén-dioxid", "szén-diszulfid", "szénhidrogén", "szén-monoxid"],["Hány évada volt a Jóbarátok c. amerikai sorozatnak?", 3, "6", "8", "10", "12"],["Ki volt a Forrest Gump c. film fõszereplõje?", 4, "Tim Robbins", "Mel Gibson", "Daniel Arnolds", "Tom Hanks"],["Mi volt Bud Spencer eredeti neve?", 1, "Carlo Pedersoli", "Mario Girotti", "Carlo Girotti", "Mario Pedersoli"],["Milyen az éghajlata Caracasnak?", 2, "mediterrán", "trópusi szavanna", "óceáni", "száraz sivatagi"],["Mit jelent a Carpe diem! latin közmondás?", 3, "Amíg élek, remélek.", "Ne ítélj, hogy ne ítéltess!", "Élj a mának!", "Egyszer élsz!"]],
               [["Hány méter magas a Pilis?", 4, "848 m", "654 m", "782 m", "756 m"],["Hány csigolyából áll a zsiráf nyaka?", 1, "7", "17", "27", "37"],["Hol rendezték meg a 2016-os kajak-kenu Európa-bajnokságot?", 2, "Londonban", "Moszkvában", "Párizsban", "Budapesten"],["1988-ban melyik film kapott Oscar-díjat?", 3, "Veszedelmes viszonyok", "Farkasokkal táncoló", "Esőember", "Üvegtigris"],["Melyik festő volt kedvenc témája a napraforgók?", 4, "Paul Gauguin", "Leonardo da Vinci", "Michelangelo", "Vincent van Gogh"],["Milyen fajtájú kutya volt Niki, Déry Tibor kisregényében?", 1, "tacskó", "kuvasz", "beagle", "bulldog"],["Ki volt Lechner Ödön?", 2, "magyar festő", "magyar építész", "magyar szobrász", "magyar színész"],["A Budapesti Fogaskerekű Vasút hányas jelzésű villamos formálisan?", 3, "13-as", "75-ös", "60-as", "40-es"],["Ki játssza Vili bácsi szerepét a Barátok köztben?", 4, "Szőke Zoltán", "R. Kárpáti Péter", "Szekeres Kristóf", "Várkonyi András"],["Melyik a Naptól számítva legkülső bolygó a Naprendszerben?", 1, "Neptunusz", "Uránusz", "Vénusz", "Plútó"]],
               [["Melyik az Európai Unió legkisebb tagállama?", 1, "Málta", "Ciprus", "Litvánia", "Lettország"],["Melyik törzsbe tartoznak a tengericsillagok?", 2, "elõgerinchúrosok", "tüskésbõrûek", "csalánozók", "gyűrűsférgek"],["Melyik évben lett világbajnok Talmácsi Gábor?", 1, "2007-ben", "2008-ban", "2009-ben", "2010-ben"],["Hányadik Golden Globe-gálát rendezték 2016-ban?", 2, "72.", "73.", "74.", "75."],["Hol született Victor Vasarely festő?", 3, "Párizsban", "Londonban", "Pécsen", "Budapesten"],["Ki írta az Énekek éneke c. verset?", 4, "Csokonai Vizéz Mihály", "Balassi Bálint", "Petőfi Sándor", "Kosztolányi Dezső"],["Kiről nevezték el az Újházi-tyúklevest?", 1, "Újházi Edéről", "Újházi Lászlóról", "Újházi Andrásról", "Újházi Annáról"],["Hány km hosszú a Kisföldalatti Vasút?", 2, "10,4 km", "4,4 km", "5,6 km", "4,6 km"],["Ki volt a Sztárban Sztár első évadának műsorvezetője?", 3, "Majka", "Till Attila", "Friderikusz Sándor", "Seberstyén Balázs"],["Aki szeptember 1-én született melyik csillagjegybe tartozik?", 4, "mérleg", "oroszlán", "rák", "szűz"]],
               [["Melyik város polgármestere Borkai Zsolt, olimpiai bajnok tornász?", 2, "Pécs", "Győr", "Sopron", "Debrecen"],["Mitõl rózsaszín a flamingó?", 3, "moszatoktól", "piros algától", "garnélaráktól", "iszaptól"],["Ki nyerte a 2016. május 1-i Forma 1-es futamot (orosz nagydíj)?", 4, "Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Nico Rosberg"],["Ki rendezte A Keresztapa c. filmet?", 1, "Francis Ford Coppola", "John Malkovich", "Garry Marshall", "Neil Patrick Harris"],["Hány üveglapból áll ez az üvegpiramis?", 2, "333", "666", "444", "888"],["Hol született Paulo Coelho, író?", 3, "Athénban", "Salvadorban", "Rio de Janeiroban", "Sao Pauloban"],["Melyik vitamin hiánya okozza a farkasvakságot?", 4, "K-vitamin", "B-vitamin", "C-vitamin", "A-vitamin"],["Mi volt a beceneve a Ford T-modell-nek?", 1, "Bádog Böske", "Bádog Marcsa", "Ford Fanni", "Ford Ferenc"],["Mikor volt az első Táncdalfesztivál?", 2, "1960-ban", "1966, ban", "1972-ben", "1978-ban"],["Hány km távolságra van a Nap a Földtől?", 3, "260 millió km", "40 millió km", "150 millió km", "180 millió km"]],
               [["Mi Esztergom partnervárosa?", 3, "Szentes", "Szeged", "Szekszárd", "Szenthalombatta"],["Hány tonna egy kék bálna?", 4, "98", "125", "152", "173"],["Maradona hányas mezt viselt?", 2, "9-es", "10-es", "11-es", "12-es"],["Melyik településen forgatták A legényanya c. fekete-fehér vígjátékot?", 3, "Tardoson", "Vértesszőlősön", "Dágon", "Szentlőrincen"],["Kinek a műve a Don Quijote szobra Spanyolországban?", 4, "Michelangelo", "Raffaello", "Mürón", "Salvador Dali"],["Melyik volt Stephen King első, 1974-ben megjelent regénye?", 1, "Carrie", "Cujo", "Dolores", "Amendo"],["Mi a Bóra?", 2, "halfajta", "szélfajta", "kölcsönhatástípus", "gombafajta"],["Hány vonallal üzemel a sanghaji metró?", 3, "8", "12", "14", "16"],["A Megasztár hanyadik szériájának győztese volt Rúzsa Magdi?", 4, "második", "negyedik", "első", "harmadik"],["Mi volt a neve az első űreszköznek amit a világűrbe juttattak?", 1, "Szputnyik–1", "Voyager-1", "Syncom–1", "Volga-1"]],
               [["Melyik országhoz tartoznak a Galápagos-szigetek?", 4, "Brazíliához", "Peruhoz", "Kolumbiához", "Ecuadorhoz"],["Mekkora a leghosszabb uborka a Guinness Rekordok Könyvében?", 1, "119,38 cm", "56,78 cm", "234,56 cm", "152,32 cm"],["Repka Attila, bírkózó melyik olimpián nyert aranyérmet?", 2, "1992, Barcelona", "1996, Atlanta", "2000, Sydney", "2004, Athén"],["Mi a címe a Nagy Imre életéről készült filmnek?", 3, "Sorstalanság", "Saul fia", "A temetetlen halott", "A hang"],["Mikor alapították a firenzei Uffizi Képtárat?", 4, "1781-ben", "1678-ban", "1802-ben", "1581-ben"],["Melyik nem Paulo Coelho műve?", 1, "Az éjszaka pásztorai", "Tizenegy perc", "Az alkimista", "Az Ötödik Hegy"],["Mi a Morgan?", 2, "német férfinév", "angol autómárka", "olasz fényképezőgépmárka", "amerikai óramárka"],["Milyen hosszú a Budapesti Fogaskerekű Vasút útvonala?", 1, "3,7 km", "4,5 km", "4,8 km", "5,2 km"],["Melyik nem csehszlovák sorozat volt?", 2, "Kórház a város szélén", "Klinika", "Mentők", "Az anyós"],["Hány holdja van a Jupiternek?", 3, "98", "34", "67", "38"]],
               [["Hol található a Tien-San hegység?", 1, "Közép-Ázsiában", "Dél-Amerikában", "Afrikában", "Kelet-Ázsiában"],["Milyen állat a gaur?", 2, "hüllő", "emlős", "madár", "kétéltű"],["Mikor született Kincsem a „csodakanca”?", 3, "1897. március 17-én", "1923. március 17-én", "1874. március 17-én", "1902. március 17-én"],["Ki volt az év sportolónõje 2007-ben?", 4, "Nagy Tímea", "Hosszú Katinka", "Mincza-Nébald Ildikó", "Szávay Ágnes"],["Kinek a festménye a Vénusz születése?", 1,  "Sandro Botticelli", "Claude Monet", "Pablo Picasso", "Michelangelo"],["Ki játssza az irodalomtanárt a \"Holt költők társasága\" c. filmben?", 2, "Ethan Hawke", "Robin Williams", "Robert Sean Leonard", "Tom Hanks"],["Mi a cvicsek?", 3, "orosz vodkafajta", "szlovák pálinka fajta", "szlovén vörösbor fajta", "nagyar pálinka fajta"],["Hány állomása van a M4-es metróvonalnak?", 4, "15", "12", "11", "10"],["Mióta látható a Castle c. sorozat Magyarországon?", 1, "2010", "2011", "2012", "2013"],["Hány milliárd évvel ezelőtt született a Nap?", 2, "1,3 milliárd", "4,6 milliárd", "2,8 milliárd", "3,6 milliárd"]],
               [["Mi Zimbabwe fõvárosa?", 2, "Jodane", "Harare", "Maputo", "Dodoma"],["Milyen állat az addax?", 3, "krokodil", "aligátor", "antilop", "jaguár"],["Hány világbajnoki címe van Alain Prost autóversenyzőnek?", 4, "három", "hat", "kettő", "négy"],["Hány gyermeke született Harry Potternek?", 3, "egy", "kettő", "három", "négy"],["Hány festményt loptak el 1983-ban a Szépművészeti Múzeumból?", 2, "3", "7", "10", "16"],["Milyen sportot nem űzött Ernest Hemingway, amerikai író?", 3, "futball", "boksz", "tenisz", "kosárlabda"],["Mi képes az aranyat feloldani?", 4, "sósav", "salétromsav", "ásványvíz", "királyvíz"],["Mikor indult meg Budapesten a menetrend szerinti autóbuszközlekedés?", 1, "1915.március 1-én", "1936.március 1-én", "1923.március 1-én", "1918.március 1-én"],["Ki nem volt a brit X faktor zsűritagja?", 2, "Kelly Rowland", "Alicia Keys", "Cheryl Cole", "Simon Cowell"],["Melyik amerikai színésznőről neveztek el kisbolygót?", 3, "Natalie Portman", "Meryl Streep", "Jodie Foster", "Max Cowell"]]];
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