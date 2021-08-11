var red = prompt("Please give me value for red parameter") || 0;
var green = prompt("Please give me value for green parameter") || 0;
var blue = prompt("Please give me value for blue parameter") || 0;

function rgb(red, green, blue) {
  return console.log("rgb(" + red + "," + green + "," + blue + ")");
}

rgb(red, green, blue);

// 0,5,6,7,8,9,10,11,12,15,20,25,26,27,30,35,40, - товаров
  // 1,21,31,41 - товар
  // 2,3,4,22,23,24,32,33,34 - товара
  //до 50
  
var numberOfItems = prompt("How many items?");

function declension(numberOfItems) {
  var word = "товар";
  
    if (numberOfItems === 1 || 21 || 31 || 41) {
    return console.log(numberOfItems + word);
}
    else if (numberOfItems === 0 || (numberOfItems >= 5 && numberOfItems <= 20) || (numberOfItems >= 25 && numberOfItems <= 30) || (numberOfItems >=35 && numberOfItems <= 40) || (numberOfItems >= 45 && numberOfItems <= 50)) {
        return console.log(numberOfItems + word + "ов");
    } else  
    return console.log(numberOfItems + word + "а");
}
declension(numberOfItems);
// } else  
// return console.log(numberOfItems + word + "а"); - не реагирует и при проверке выдает 'товар'