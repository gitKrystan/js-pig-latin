describe('Ordway', function() {
  it('saves a word as an Ordway object', function() {
    var testWord = createTestWord();
    expect(testWord.word).to.equal('test');
  });

  it('adds ay to the end of words that start with a vowel', function() {
    var vowelWord = createVowelWord();
    var consonantWord = createConsonantWord();
    expect(vowelWord.ansformtray()).to.equal("assessmentay");
    expect(consonantWord.ansformtray()).to.not.equal("testay");
  });

  it('moves the beginning consonants to the end followed by ay', function() {
    var consonantWord = createConsonantWord();
    var twoConsonantWord = createTwoConsonantWord();
    var threeConsonantWord = createThreeConsonantWord();
    expect(consonantWord.ansformtray()).to.equal("esttay");
    expect(twoConsonantWord.ansformtray()).to.equal("uffstay");
    expect(threeConsonantWord.ansformtray()).to.equal("ingstray");
  });
});

var createTestWord = function() {
  return new Ordway('test');
};

var createVowelWord = function() {
  return new Ordway('assessment');
};

var createConsonantWord = function() {
  return new Ordway('test');
};

var createTwoConsonantWord = function() {
  return new Ordway('stuff');
};

var createThreeConsonantWord = function() {
  return new Ordway('string');
};
