function isValidDate(date_string) {
  let parts = date_string.split("/"); // Sépare la date en jour, mois et année
  let day = parseInt(parts[0], 10); // Convertit le jour en nombre entier
  let month = parseInt(parts[1], 10); // Convertit le mois en nombre entier (les mois commencent à 0 en JavaScript)
  let year = parseInt(parts[2], 10); // Convertit l'année en nombre entier
  console.log(day, month, year);
  if (month < 1 || month > 12) {
    return false;
  } else if (year < 1000 || year > 9999) {
    return false;
  } else if (day > maxDayInMonth(month) || day < 1) {
    return false;
  }

  return true;
}
console.log(isValidDate("30 / 02 / 2005"));

function maxDayInMonth(num_mois) {
  if (num_mois === 2) {
    return 28;
  } else if (
    num_mois === 1 ||
    num_mois === 3 ||
    num_mois === 5 ||
    num_mois === 7 ||
    num_mois === 8 ||
    num_mois === 10 ||
    num_mois === 12
  ) {
    return 31;
  } else {
    return 30;
  }
}

console.log(maxDayInMonth());

//ETAPE 2

function isPalindrome(date_string) {
  if (isValidDate(date_string)) {
    // verif palindrome +
    // enlève le / de la date
    let try_date = date_string.replace(/\//g, "");
    // Vérifie si la chaîne est un palindrome
    //   split met dans un tableau / reverse retourne le sens du tableau / join regroupe les éléments
    let reverseDate = try_date.split("").reverse().join("");
    return try_date === reverseDate;
  } else {
    return false;
  }
}
console.log(isPalindrome("02/12/2120"));
