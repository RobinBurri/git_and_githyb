// Map

const numbers = [10, 20, 30, 40, 50];

const numberTimes10 = numbers.map((v, index) => {
	return { value: v * 10, idx: index };
}).filter(v => v.value >= 300 );

console.log(numberTimes10);
