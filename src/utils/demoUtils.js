export function checkPalindrome(str) {
  const cleanedPal = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const isPalindrome = cleanedPal === cleanedPal.split("").reverse().join("");
  return isPalindrome;
}

export function checkFibonacci(str) {
  console.log("checkFibonacci - ", str);
  const cleanedFib = str.replace(/[, ]/g, "")
let isFib =false;
for (let i = 0; i < cleanedFib.length; i++) {
    if (cleanedFib[i] === cleanedFib[i+1]) {
     isFib = true;
    }
}
  return isFib; 
}