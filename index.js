// Code your solution here!
function printString(myString) {
	console.log(myString[0]);
	if (myString.length > 1) {
	let mySubString = myString.substring(1, myString.length);
	printString(mySubString);
	} else {
	return true;
	}
	}
	// printString("deneme12333333hjhjhjj");
	function reverseString(myString) {
	console.log(myString[myString.length - 1]);
	if (myString.length > 1) {
	let mySubString = myString.substring(0, myString.length - 1);
	reverseString(mySubString);
	} else {
	return true;
	}
	}
	// reverseString("RockYou");
	function isPalindrome(mystring) {
	if (mystring.length === 1) {
	return true;
	}
	if (mystring[0] === mystring[mystring.length - 1]) {
	let mySubstring = mystring.substring(1, mystring.length - 1);
	isPalindrome(mySubstring);
	return true;
	} else {
	return false;
	}
	}
	// console.log(isPalindrome('madam'))
	function addUpTo(arr, index) {
	if (index > 0) {
	return arr[index] + addUpTo(arr, index - 1);
	} else {
	return arr[index];
	}
	}
	let arr = [1, 2, 3, 4, 5];
	// let index = 3;
	// console.log(addUpTo(arr, index));
	function includesNumber(arr, number) {
	// console.log(arr)
	if (arr.length ===0) {
	return false;
	}
	if (arr[0] === number) {
	return true;
	} else {
	let newArray = arr.slice(1);
	// console.log("newArray: ", newArray);
	return includesNumber(newArray, number);
	}
	}
	// let number = 4;
	// console.log(includesNumber(arr, number));
	function maxOf(arr){
	if (arr.length ===1) {
	return arr[0]
	} else {
	return Math.max(arr.pop(),maxOf(arr))
	} 
	}

