var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
console.log(text);
var animal = 'zielone słonie';
var animalUpperCased = animal.toUpperCase();
console.log(animalUpperCased);
var textCharsAfter = text.replace('Papugi', animalUpperCased);
console.log(textCharsAfter);
var textHalf = textCharsAfter.length/2;
var textCharsAfterHalf = textCharsAfter.substr(0, textHalf);
console.log(textCharsAfterHalf);