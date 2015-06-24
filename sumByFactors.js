// Assignment: http://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript
/* Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java or C# and as an array of arrays in Python, Ruby or Clojure.*/

/* Example: 
I = [12, 15] 
result = [[2, 12], [3, 27], [5, 15]]
*/

// 2, 3, and 5 are the prime factors of 12 & 15
// 2 in 12 (12)
// 3 in 12 & 15 (12 + 15 = 27)
// 5 in 15 (15)


// BEST PRACTICES VERSION (to be reviewed):
function bpsumOfDivided(lst) {
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m+1);

    for(var i = 2; i <= m; ++i) {
        if(marked[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
        if(isMul) primes.push([i, sum]);

        for(var j = 2*i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}

// take1
function sumOfDivided(lst) {
	var allFactors = {};
	lst.forEach(function(num) {
		allFactors = addFactors(num, allFactors);
	});
	function addFactors(num, currFactors) {
		if (num === 1) return currFactors;
		else {
			for (var i = 2; i <= Math.floor(Math.abs(num) / 2); i++) {
				if (num % i === 0) {
					currFactors[i] = true;
					return addFactors(num / i, currFactors);
				}
			}
			currFactors[Math.abs(num)] = true;
			return currFactors;
		}
	}
	var output = [];
	for (var property in allFactors) {
		output.push(property);
	}
	return output.map(function(prime) {
		var sum = 0;
		for (var i = 0; i < lst.length; i++) {
			if (lst[i] % prime === 0) sum += lst[i];
		}
		return [Number(prime),sum];
	});
}
console.log(sumOfDivided([12,15,-45]));

