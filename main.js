function getName(object) {
	return object.name;
}

function totalLetters(array) {
	var newString = array.join("")
	return newString.length
}

//Not functional
function keyValue(key, value) {
	return {key: value}
}

function negativeIndex(arr, num) {
	return arr[arr.length + num]
}

function removeM(string) {
	array = string.split("");
	newArr = []
	for(i = 0; i < array.length; i++) {
		if(array[i].toLowerCase() !== 'm') {
			newArr.push(array[i])
		}
	}
	return newArr.join("")
}

function printObject(obj) {
	for(key in obj) {
		document.write(key + " is " + obj[key]);
	}
}


function vowels(string) {
	var vowelList = ['a', 'e', 'i', 'o', 'u'];
	var stringVowels = []
	var stringArray = string.split("")
	for(var i = 0; i < stringArray.length; i++) {
		for(var n = 0; n < vowelList.length; n++) {
			if(vowelList[n] === stringArray[i]) {
				stringVowels.push(stringArray[i])
			}
		}
	}
	return stringVowels
}

function twins(array) {
	for(var i = 0; i < array.length; i += 2) {
		if(array[i] !== array[(i + 1)]) {
			return false
		}
	}
	return true
}
 function or(array) {
 	for(var i = 0; i < array.length; i++) {
 		if(array[i] === true){
 			return true
 		}
 	}
 	return false
 }

function unique(array) {
	var uniqueArray = []
	var isInUniqueArray = function(x) {
		for(var i = 0; i < uniqueArray.length; i++) {
			if(x === uniqueArray[i]) {
				return false
			}
		}
		return true
	}
	for(var n = 0; n < array.length; n++) {
		if(isInUniqueArray(array[n])){
			uniqueArray.push(array[n])
		}
	}
	return uniqueArray
}



