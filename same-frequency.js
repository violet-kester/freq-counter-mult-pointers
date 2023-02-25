// add whatever parameters you deem necessary & write docstring
/**
 *
  Takes two positive integers, checks if the two numbers
   have the same frequency of digits. Returns true or false
 */

function getFrequencyCounter(numArr) {
  const numFreqs = {};

  for (const num of numArr) {
    const curr = numFreqs[num] || 0;
    numFreqs[num] = curr + 1;
  }

  return numFreqs;
}

function sameFrequency(num1, num2) {
  const num1Arr = convertToArray(num1);
  [1, 2, 3];
  const num2Arr = convertToArray(num2);
  [3, 2, 1];
  const num1Freq = getFrequencyCounter(num1Arr);
  const num2Freq = getFrequencyCounter(num2Arr);

  for (let num in num1Freq) {
    if (!num in num2Freq) {
      return false;
    }

    if (num2Freq[num] !== num1Freq[num]) {
      return false;
    }
  }

  return true;
}

function convertToArray(num) {
  return num.toString().split("");
}

sameFrequency(123, 321); // true
// sameFrequency(34, 14);     // false
// sameFrequency(22, 22);     // true
// sameFrequency(22, 222);    // false
