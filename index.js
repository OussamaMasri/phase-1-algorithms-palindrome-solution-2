function isPalindrome(word) {
  // Write your algorithm here
  const wordArrray=word.split("").reverse().join("")
  return wordArrray===word
}
isPalindrome('abba')
isPalindrome('a')
isPalindrome('racecar')
isPalindrome('robot')
isPalindrome('ab')


/* 
  Add your pseudocode here
 initialize wordArray
 assign word.split('') to wordArray
 reverse wordArray
 check reversed wordArray in if elseif it meets the condition
 return true;
 esle return false ; 
*/

/*
  Add written explanation of your solution here
  1. Take the word passed in
and split it to form an array for easy use of reverse() FUNCTION
2.Assign results to variable wordArray
3. revers the wordArray using reverce()
4. CHeck it through if statment if it matches original input
5.return true if matches and false if it doesnt
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;