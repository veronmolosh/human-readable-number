module.exports = function toReadable(number) {
	const words = [
		"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
		"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
	];

	const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	if (number === 0) {
		return "zero";
	}

	if (number < 20) {
		return words[number];
	}

	if (number < 100) {
		const ten = Math.floor(number / 10);
		const unit = number % 10;
		return `${tens[ten]}${unit !== 0 ? " " + words[unit] : ""}`;
	}

	if (number < 1000) {
		const hundred = Math.floor(number / 100);
		const remainder = number % 100;
		return `${words[hundred]} hundred${remainder !== 0 ? " " + toReadable(remainder) : ""}`;
	}

	return "Number out of range";
}
