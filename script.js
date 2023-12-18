function firstChar(text) {
  for (let index in text) {
    let asciichar = text.charCodeAt(index);
    if ((asciichar >= 65 && asciichar <= 90) || (asciichar >= 97 && asciichar <= 122)) {
      let word = String.fromCharCode(asciichar);
      return word;
    }
  }
  return '';
}


// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
