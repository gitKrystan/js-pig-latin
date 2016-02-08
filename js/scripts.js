function Ordway(word) {
  this.word = word;
}

Ordway.prototype.ansformtray = function () {
  var word = this.word.toLowerCase();

  if (isVowel(word[0])) {
    var results = appendWithVowelEnding(word);
  } else {
    var results = wordLoop(word);
  }

  if (isCapitalized(this.word)) {
    return capitalizeFirstLetter(results);
  } else {
    return results;
  }
};

var isVowel = function(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter);
};

var isPunctuation = function(character) {
  var punctuationMarks = ['?', '!', '.', ';', ':', ','];
  return punctuationMarks.includes(character);
};

var endsInVowel = function(word) {
  return isVowel(word[word.length - 1]);
};

var isCapitalized = function(word) {
  return capitalizeFirstLetter(word) === word;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var appendWithVowelEnding = function(word) {
  var characters = word.split('');
  var punctuationMarks = generatePunctuationMarks(characters).join('');

  while (punctuationMarks.includes(characters[characters.length - 1])) {
    characters.pop(characters[characters.length - 1]);
  }

  if (endsInVowel(characters.join(''))) {
    return characters.join('') + 'yay' + punctuationMarks;
  } else {
    return characters.join('') + 'ay' + punctuationMarks;
  }
};

var alsoMoveU = function(letters) {
  if (letters[0] === "u") {
    var firstU = letters.shift();
    letters.push(firstU);
  }
  return letters;
};

var wordLoop = function(word) {
  var characters = word.split('');
  var punctuationMarks = generatePunctuationMarks(characters);

  while(!isVowel(characters[0])) {
    var firstLetter = characters.shift();
    characters.push(firstLetter);

    if (firstLetter === "q") {
      characters = alsoMoveU(characters);
    }
  }

  characters.push('ay');
  characters.push(punctuationMarks);
  return characters.join('');
};

var generatePunctuationMarks = function(characters) {
  var punctuationMarks = [];
  while (isPunctuation(characters[characters.length - 1])) {
    var punctuationMark = characters.pop();
    punctuationMarks.unshift(punctuationMark);
  }
  return punctuationMarks;
};

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
  return ordwayArray;
};
