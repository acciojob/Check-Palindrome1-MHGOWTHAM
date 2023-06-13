// complete the given function

function palindrome(str){
var rev=str.reverse();
	if(rev===str)
		return true;
	else
		return false;
}
module.exports = palindrome
