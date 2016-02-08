function Ordway(word) {
  this.word = word;
}

Ordway.prototype.ansformtray = function () {
  var word = this.word;

  if (isVowel(word[0])) {
    return word + 'ay';
  } else {
    return wordLoop(word) + 'ay';
  }
};

var isVowel = function(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter);
}

var wordLoop = function(word) {
  var letters = word.split('');

  while(!isVowel(letters[0])) {
    var firstLetter = letters.shift();
    letters.push(firstLetter);
  }

  return letters.join('');
};
