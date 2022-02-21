const button = document.getElementById("button");
const aika = document.getElementById("aika");
var pva;
var tunnit;
button.addEventListener("click", () => {
  pva = document.getElementById("annettu").value;
  tunnit = document.getElementById("tunnit").value;

  const aikaNyt = Date.now();

  var valittuPva = Date.parse(pva);

  var haluttuAika = aikaNyt - valittuPva;

  haluttuAika = haluttuAika / 1000;
  haluttuAika = haluttuAika / 3600;
  console.log(tunnit);
  console.log(haluttuAika);
  var lasku = (tunnit / haluttuAika) * 24;
  console.log(lasku);
  var tunnit = lasku.toFixed(0);
  console.log(tunnit);

  var minuutit = lasku - tunnit;
  minuutit = minuutit * 60;
  console.log(minuutit);
  lasku = minuutit.toFixed(0);
  var sekunnit = minuutit - lasku;
  console.log(sekunnit);
  sekunnit = sekunnit * 60;
  console.log(sekunnit);

  //aika.firstElementChild(tunnit, ":", minuutit, ":", sekunnit);
});
