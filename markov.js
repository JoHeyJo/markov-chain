/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   * 
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   * 
   * */

  getChains() { 
    const chain = {};

    for(let i = 0; i < this.words.length; i++){
      const firstWord = this.words[i];
      const secondWord = this.words[i+1];
      if(chain[firstWord]){
        chain[firstWord].push(secondWord || null)
      } else {
        chain[firstWord] = [secondWord];
      }
    }

    return chain;

  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    let currentWord = this.words[0];
    let randomText = [currentWord];
    // TODO: implement this
   
    while(currentWord){
      const randIndex = Math.floor(Math.random() * (this.chains[currentWord].length));
      let secondWord = this.chains[currentWord][randIndex];
      randomText.push(secondWord);
      currentWord = secondWord;
    }
    return randomText.join(" ").trim();
  }
}

 //write test that has one word in array 
