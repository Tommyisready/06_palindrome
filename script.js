function isValidDate(date_string) {
  // Convertir le format de la date de "jj/mm/aaaa" à "aaaa-mm-jj"
  let parts = date_string.split("/"); // Sépare la date en jour, mois et année
  let day = parseInt(parts[0], 10); // Convertit le jour en nombre entier
  let month = parseInt(parts[1], 10) - 1; // Convertit le mois en nombre entier (les mois commencent à 0 en JavaScript)
  let year = parseInt(parts[2], 10); // Convertit l'année en nombre entier

  // Crée un objet Date avec les valeurs extraites
  let date = new Date(year, month, day);

  // Vérifie si l'objet Date correspond bien aux valeurs de jour, mois et année fournies
  if (
    date.getFullYear() === year && // Vérifie l'année
    date.getMonth() === month && // Vérifie le mois
    date.getDate() === day // Vérifie le jour
  ) {
    return true; // La date est valide
  } else {
    return false; // La date est invalide
  }
}

// Etape 2

function isPalindrome(date_string) {
  if (!isValidDate(date_string)) {
    return false;
  }
  // enlève le / de la date
  let try_date = date_string.replace(/\//g, "");
  // Vérifie si la chaîne est un palindrome
  let reverseDate = try_date.split("").reverse().join("");
  return try_date === reverseDate;
}

console.log(isPalindrome("11/02/2011"));

// Etape 3

function getNextPalindromes(x) {
  // Initialise un tableau pour stocker les dates palindromes trouvées
  let results = [];
  // Initialise la date courante à la date d'aujourd'hui
  let currentDate = new Date();

  // Boucle pour rechercher les x prochaines dates palindromes

  while (results.length < x) {
    // Incrémente la date d'un jour
    currentDate.setDate(currentDate.getDate() + 1);
    // Convertit la date en chaîne formatée "dd/mm/yyyy"
    let dateStr = formatDate(currentDate);
    // Vérifie si la date formatée est un palindrome
    if (isPalindrome(dateStr)) {
      // Ajoute la date au tableau des résultats si c'est un palindrome
      results.push(dateStr);
    }
  }
  // Retourne le tableau des résultats contenant les x prochaines dates palindromes
  return results;
}

function formatDate(date) {
  // Utilisation du format français(dd/mm/yyyy)
  return date.toLocaleDateString("fr-FR");
}

console.log(getNextPalindromes(50));

// Etape 4
