// add whatever parameters you deem necessary & write doc comment

/**  Frequency counter
 */ //TODO: what i take and what i return
/** Accepts a string or array of items and returns the frequency of each item
 * in items
 */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

/** Accepts two strings: word and letters.
 *  Returns true if the word can be built with the letters; otherwise, returns false.
 */ //TODO: change name of letters to available letters
function canConstructWord(word, availLetters) {
  if (availLetters.length < word.length) return false;

  const wordFreq = getFrequencyCounter(word);
  const lettersFreq = getFrequencyCounter(availLetters);

  for (let key in wordFreq) {
    if (!key in lettersFreq) {
      return false;
    }

    if (wordFreq[key] > lettersFreq[key]) {
      return false;
    }
  }

  return true;
}
