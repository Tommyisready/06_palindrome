function maxDaysInMonth(date_string) {
  let nbreJour = 0;
  let date = new Date(date_string);
  console.log(date);
  let mois = date.getMonth();
  console.log(mois);
  if (mois <= 6) {
    if (mois % 2 == 0) {
      nbreJour = 31;
    } else {
      nbreJour = 30;
    }
  } else {
    if (mois % 2 == 1) {
      nbreJour = 30;
    } else {
      nbreJour = 31;
    }
  }
  if (mois == 1) {
    nbreJour = 28;
  }
}
maxDaysInMonth("25/12/2024");
function isValidDate() {}



function maxDaysInMonth(date_string) {
  // Convertir le format de la date de "jj/mm/aaaa" à "aaaa-mm-jj"
  let parts = date_string.split("/");
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10) - 1; // Les mois commencent à 0 en JavaScript
  let year = parseInt(parts[2], 10);
  
  let date = new Date(year, month, day);
  console.log(date);