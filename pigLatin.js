// Assignment: http://www.codewars.com/kata/single-word-pig-latin/javascript

// take1
function pigLatin(string) {
	string = string.toLowerCase();
	if (string.match(/[^a-z]/ig)) return null;
	else if (string.charAt(0).match(/['aeiou']/i)) { return string+"way" }
	else if (! string.match(/['aeiou']/i)) return string+"ay";
	else { return string.substr(string.search(/['aeiou']/i)) + string.substr(0, string.search(/['aeiou']/i))+"ay"; }
}
console.log(pigLatin("test"));
console.log(pigLatin("bbbb"));
console.log(pigLatin("atest"));
console.log(pigLatin("atest3"));
