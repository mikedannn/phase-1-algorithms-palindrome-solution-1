function reverseString(word) {
  const wordArray = word.split('');
  const reverseWordArray = wordArray.reverse();
  const reversedWord = reverseWordArray.join('');
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  if(word ===reversedWord) {
    return true;
  } else {
    return false;
  }
}


/* 
  reverse the entered string 
  if the reversed string equals the input string
    return true
  if else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotor"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bubblegum"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tiny"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
