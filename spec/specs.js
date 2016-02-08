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

  it('moves u along with q if q is in the initial consonant string', function() {
    var qUWord = createQUWord();
    var sQUWord = createSQUWord();
    expect(qUWord.ansformtray()).to.equal('ietquay');
    expect(sQUWord.ansformtray()).to.equal('ealsquay');
  });

  it('treats Y as a consonant', function() {
    var yWord = createBeginsWithYWord();
    expect(yWord.ansformtray()).to.equal("ellowyay");
  });

  it('adds yay for a word that begins and ends with a vowel', function() {
    var vowelWord = new Ordway('area');
    expect(vowelWord.ansformtray()).to.equal('areayay');
  });

  it('consistently capitalizes word base on input capitalization', function() {
    var capitalWord = new Ordway('Test');
    expect(capitalWord.ansformtray()).to.equal('Esttay');
  });

  it('ends transformed words with the same punctuation', function() {
    var punctuatedWord = new Ordway('Test!');
    var anotherPunctuatedWord = new Ordway('area?');
    expect(punctuatedWord.ansformtray()).to.equal('Esttay!');
    expect(anotherPunctuatedWord.ansformtray()).to.equal('areayay?');
  });
});

describe('Entencesay', function() {
  it('contains a list of words', function() {
    var testSentence = createTestSentence();
    expect(testSentence.words.length).to.equal(5);
  });

  it('transforms each word in the sentence', function() {
    var testSentence = createTestSentence();
    expect(testSentence.ansformtray()).to.eql(['Isthay', 'isay', 'ayay', 'esttay', 'entencesay.']);
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

var createQUWord = function() {
  return new Ordway('quiet');
};

var createSQUWord = function() {
  return new Ordway('squeal');
};

var createBeginsWithYWord = function() {
  return new Ordway('yellow');
};

var createTestSentence = function() {
  return new Entencesay('This is a test sentence.');
};
