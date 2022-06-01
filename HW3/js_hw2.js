//1
let num = 1;
const pow = 10;
for(let i=1; i <= pow; i++){
    num *= 2;
}
console.log(num)

//1*
const powNumber = function(pow){ 
	let num =1;   
	for(let i=1; i <= pow; i++){
    num *= 2;
	}
	return num;
}
console.log(powNumber(pow))

//2
let count = 5;
let str = ':)';
let resultStr ='';
for(let i=1; i<= count; i++){
	resultStr += str + ' ';
	console.log(resultStr);
}

//2*
const printSmile = function(str, numberOfRow){
	let resultStr ='';
	for(let i=1; i<= numberOfRow; i++){
		resultStr += str + ' ';
		console.log(resultStr);
	} 
}
printSmile(str, count)

//3**
const getWordStructure =function(word){
	let regexp = /[AEYUIO]/gi;
	let matches_array = word.match(regexp);
 	let vowels = matches_array.length;
	if (word.indexOf('-') == -1){
		let consonants = word.length - vowels;
	}
	else{
		let consonants = word.length - vowels - 1;
	}
 	console.log(`Слово ${word} состоит из ${vowels} гласных и ${consonants} согласных букв`);
}
getWordStructure('hello')

//4**
const functionIsPalindrom function(word){
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
    }
console.log(functionIsPalindrom('asdfdsa'))
