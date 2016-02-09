function Entencesay(sentence) {
  var wordArray = sentence.split(" ");
  var ordwayArray = [];
  wordArray.forEach(function(word) {
    var ordway = new Ordway(word);
    ordwayArray.push(ordway);
  });
  this.words = ordwayArray;
}

Entencesay.prototype.ansformtray = function () {
  var ordwayArray = [];
  this.words.forEach(function(word) {
    ordwayArray.push(word.ansformtray());
  });
  return ordwayArray.join(' ');
};

function Ordway(word) {
  this.word = word;
}

Ordway.prototype.ansformtray = function () {
  var word = this.word
  var capitalized = this.isCapitalized();

  var firstConsonantSearch = /^((qu)|[^aeiou])+/i;
  var firstConsonants = word.match(firstConsonantSearch) || [''];

  var newWord = '';
  if (this.beginsWithVowel() && this.endsWithVowel()) {
    newWord = word +'yay';
  } else if (this.containsVowels()) {
    newWord = word.replace(firstConsonantSearch, '');
    newWord = newWord + firstConsonants[0].toLowerCase() + 'ay';
  } else {
    newWord = word + 'ay';
  }

  if (capitalized) {
    return capitalizeFirstLetter(newWord);
  } else {
    return newWord;
  }
};

Ordway.prototype.containsVowels = function () {
  return /[aeiouy]/i.test(this.word);
};

Ordway.prototype.beginsWithVowel = function () {
  return /^[aeiou]/i.test(this.word);
};

Ordway.prototype.endsWithVowel = function () {
  return /[aeiou]$/i.test(this.word);
};

Ordway.prototype.isCapitalized = function () {
  return /^[A-Z]/.test(this.word);
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
