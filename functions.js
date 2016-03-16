// TODO: add your solutions here!
// 1. Build your own concatentation
function combineWords(word1, word2) {
    return (word1 + " " + word2);
}

combineWords('dog', 'house');
// displays 'doghouse'


// 2. Repeat a phrase
function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
}
repeatPhrase ("Hello", 5);


// 3. Build your own Power function
function toTheNthPower(number, power) {
    var total = 1;
    for (i=0; i < power; i++) {
        total = total * number;
    }
    return total;
}

toTheNthPower(4, 5);


// 4. Area of a circle: π r2
function areaOfACircle(radius) {
    var answer = radius;
    answer = answer * radius;
    answer = answer * 3.1415;
    console.log(answer);
}

areaOfACircle(2);


// 5. Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
    var pT = Math.sqrt(a*a + b*b);
    return pT;
}

pythagoreanTheorem(3, 4);
// should display 5;


// 6. Is X Evenly Divisible by Y ?
function isXEvenlyDivisibleByY(x, y) {
    if (x % y) {
        return fasle;
    }
    else return true;
}

isXEvenlyDivisibleByY(99, 3);


// 7. Vowel Count:
function countVowels(word) {
	var count = 0;
	word = word.toLowerCase();
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;
		}
	}
	return count;
}

countVowels("stealing");
// displays 3


// 8. Build an ASCII Triangle!
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var level = '';

		for(var a = 0; a < i; a++) {
			level += '*';
		}

		console.log(level);
	}
}

printTriangle(3);
// displays
// *
// **
// ***


// 9. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
// https://media3.giphy.com/media/zIwIWQx12YNEI/200.gif
