const button = document.getElementById("button");
const aika = document.getElementById("aika");

var pva;
var tunnit;

button.addEventListener("click", () => {
  pva = document.getElementById("annettu").value;
  tunnit = document.getElementById("tunnit").value;

  const aikaNyt = Date.now();

  var valittuPva = Date.parse(pva);

  var aikaväli = aikaNyt - valittuPva;

  console.log("aikaväli ms " + aikaväli);

  //Haluttu aika ms -> h
  aikaväli = aikaväli / 1000;
  aikaväli = aikaväli / 3600;
  console.log("aikaväli h " + aikaväli);

  var keskPva = (tunnit / aikaväli) * 24;
  console.log("keskimääräinen per päivä " + keskPva);

  var tunnit = Math.floor(keskPva);
  console.log("kokonaiset tunnit " + tunnit);

  var minuutit = keskPva - tunnit;
  console.log("ylijäänyt aika " + minuutit);

  minuutit = minuutit * 60;
  console.log("ylijäänyt aika minuutteina " + minuutit);
  var kMinuutit = Math.floor(minuutit);

  var sekunnit = minuutit - kMinuutit;
  console.log("minuuteista ylijäänyt aika " + sekunnit);
  sekunnit = sekunnit * 60;
  console.log("sekunnit sekunteina " + sekunnit);
  var kSekunnit = Math.floor(sekunnit);
  console.log("kokonaiset sekunnit " + kSekunnit);

  const newDiv = document.createElement("div");

  const testi = document.createTextNode(
    "Keskimääräinen aika per päivä: " +
      tunnit +
      ":" +
      kMinuutit +
      ":" +
      kSekunnit
  );
  newDiv.appendChild(testi);

  const divv = document.getElementById("div1");
  document.body.insertBefore(newDiv, divv);

  /* haluttuAika = haluttuAika / 1000;
  haluttuAika = haluttuAika / 3600;
  console.log("annetut tunnit: " + tunnit);
  console.log("nykyhetki - valittuaika " + haluttuAika);
  var lasku = (tunnit / haluttuAika) * 24;
  console.log(" keskimääräinen aika päivässä " + lasku);
  var tunnit = Math.floor(lasku);
  console.log("kokonaistunnit " + tunnit);

  var minuutit = lasku - tunnit;
  console.log("minuuttien osuus" + minuutit);
  kMinuutit = minuutit * 60;
  console.log("kokonaiset minuutit " + kMinuutit);
  lasku = Math.floor(minuutit);
  console.log("kokonaiset minuutit " + lasku);
  var sekunnit = minuutit - lasku;
  console.log("sekuntien osuus " + sekunnit);
  sekunnit = sekunnit * 60;
  var kSekunnit = Math.floor(sekunnit);
  console.log("kokonaiset sekunnit " + kSekunnit);
  */

  //aika.firstElementChild(tunnit, ":", minuutit, ":", sekunnit);
});
