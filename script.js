// complete the given function

function palindrome(str){
var format=str.toLowerCase();
	var rev=format.split('').reverse().join('');
	return rev===format;
}
module.exports = palindrome
