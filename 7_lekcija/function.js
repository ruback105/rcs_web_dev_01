const peopleNames = ["Artūrs Puško", "iGoRs 228", "Tatjana", "Jānis M."];

function isCapitalized(word) {
  const firstLetter = word.charAt(0); // es nezinu, vai viņs ir liels vai mazs
  const uppercasedFirstLetter = firstLetter.toLocaleUpperCase(); // šeit viņs ir liels

  const isFirstLetterValid = firstLetter === uppercasedFirstLetter;
  if (!isFirstLetterValid) {
    return false;
  }

  return true;
}

function validateName(name) {
  // Vārds sastāv no vārda un uzvārda (kopā 2 vārdi)
  const splittedName = name.split(" "); // ["Artūrs", "Puško"]
  if (splittedName.length !== 2) {
    return false;
  }

  // Vai abi vārdi sākās ar lielu burtu
  if (!isCapitalized(splittedName[0])) {
    return false;
  }
  if (!isCapitalized(splittedName[1])) {
    return false;
  }

  // Ja viss ir ok
  return true;
}

const filteredNames = peopleNames.filter((name) => {
  return validateName(name);
});
