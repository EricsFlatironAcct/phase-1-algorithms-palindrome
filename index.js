function isPalindrome(word) {
  // Write your algorithm here
  for(let index =0;index<word.length/2;index++){ 
    if (word.charAt(index)!=word.charAt(word.length-index-1)) return false
  }
  return true
}

/* 
 loop through word starting at the first character
    if character at index !=  character at end - index return false
  if all checks out, return true
*/

/*
  only need to look at first half of word, since you're checking against back half
  middle character on odd lengths don't need checked, so length/2 is fine to cut out the middle
  returning as soon as something is wrong prevents cycling through entire loop
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
