// Etape 1

// Fonction pour vérifier si une date est valide
function is_valid_date(date_string) {
  let parts = date_string.split("/");
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10); // Correction de l'index pour year (était parts[3] par erreur)

  // Vérifie si le mois est entre 1 et 12
  if (month < 1 || month > 12) {
    return false;
    // Vérifie si l'année est entre 1000 et 9999
  } else if (year < 1000 || year > 9999) {
    return false;
    // Vérifie si le jour est valide pour le mois donné
  } else if (day > max_day_in_month(month, year) || day < 1) {
    return false;
  }
  return true;
}
console.log(is_valid_date("25/10/2020")); // Devrait retourner true

// Fonction pour obtenir le nombre maximum de jours dans un mois donné
// Prend en compte les années bissextiles pour février
function max_day_in_month(month, year) {
  if (month == 2) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
  } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else {
    return 30;
  }
}

// Etape 2

// Fonction pour vérifier si une date est un palindrome
function is_palindromes(date_string) {
  // Vérifie d'abord si la date est valide
  if (is_valid_date(date_string)) {
    // Enlève les '/' pour vérifier si la date est un palindrome
    let try_date = date_string.replace(/\//g, "");
    let reverse_date = try_date.split("").reverse().join("");
    return try_date === reverse_date;
  } else {
    return false;
  }
}

console.log(is_palindromes("02/02/2020")); // Devrait retourner true

//  Etape 3

// Fonction pour obtenir les x prochaines dates palindromes
function get_next_palindromes(x) {
  let result = [];
  let current_date = new Date();

  // Continue jusqu'à ce que nous ayons trouvé x dates palindromes
  while (result.length < x) {
    current_date.setDate(current_date.getDate() + 1); // Incrémente la date
    let date_str = FormatDate(current_date); // Formate la date au format jj/mm/aaaa
    if (is_palindromes(date_str)) {
      // Vérifie si la date est un palindrome
      result.push(date_str);
    }
  }
  return result;
}

// Fonction pour formater une date en chaîne de caractères au format "jj/mm/aaaa"
function FormatDate(date) {
  return date.toLocaleDateString("fr-FR");
}
console.log(get_next_palindromes(8)); // Devrait retourner les 8 prochaines dates palindromes

// Etape 4

// Fonction pour vérifier si une chaîne de caractères est un palindrome
function isPalindrome(str) {
  let reverse_str = str.split("").reverse().join("");
  return str === reverse_str;
}

// Fonction pour vérifier si une date est valide
function is_valid_date(date_string) {
  let parts = date_string.split("/");
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10);

  if (month < 1 || month > 12) {
    return false;
  } else if (year < 1000 || year > 9999) {
    return false;
  } else if (day > max_day_in_month(month, year) || day < 1) {
    return false;
  }
  return true;
}

// Fonction pour obtenir le nombre maximum de jours dans un mois donné (y compris les années bissextiles)
function max_day_in_month(month, year) {
  if (month === 2) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
  } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else {
    return 30;
  }
}

// Fonction pour vérifier si une date est un palindrome
function isDatePalindrome(date_string) {
  if (is_valid_date(date_string)) {
    let try_date = date_string.replace(/\//g, "");
    return isPalindrome(try_date);
  } else {
    return false;
  }
}

console.log(isDatePalindrome("02/02/2020")); // true
console.log(isDatePalindrome("12/12/2021")); // false

// Fonction pour obtenir les x prochaines dates palindromes
function get_next_palindromes(x) {
  let result = [];
  let current_date = new Date();

  while (result.length < x) {
    current_date.setDate(current_date.getDate() + 1);
    let date_str = FormatDate(current_date);
    if (isDatePalindrome(date_str)) {
      result.push(date_str);
    }
  }
  return result;
}

// Fonction pour formater une date en chaîne de caractères au format "jj/mm/aaaa"
function FormatDate(date) {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

console.log(get_next_palindromes(8));
