// var red = prompt("Please give me value for red parameter") || 0;
// var green = prompt("Please give me value for green parameter") || 0;
// var blue = prompt("Please give me value for blue parameter") || 0;

// function rgb(red, green, blue) {
//   return console.log("rgb(" + red + "," + green + "," + blue + ")");
// }

// rgb(red, green, blue);

function declension(numberOfItems) {
  var word = " товар";

  if (
    numberOfItems === 1 ||
    numberOfItems === 21 ||
    numberOfItems === 31 ||
    numberOfItems === 41
  ) {
    console.log(numberOfItems + word);
    return numberOfItems + word;
  } else if (
    numberOfItems === 0 ||
    (numberOfItems >= 5 && numberOfItems <= 20) ||
    (numberOfItems >= 25 && numberOfItems <= 30) ||
    (numberOfItems >= 35 && numberOfItems <= 40) ||
    (numberOfItems >= 45 && numberOfItems <= 50)
  ) {
    console.log(numberOfItems + word + "ов");
    return numberOfItems + word + "ов";
  } else {
    console.log(numberOfItems + word + "а");
    return numberOfItems + word + "а";
  }
}

declension(0);
