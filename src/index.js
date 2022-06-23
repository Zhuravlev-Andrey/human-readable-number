module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) return units[number];
    const remains = number % 10;
    if (number < 100)
        return (
            dozens[Math.floor(number / 10) - 2] +
            (remains ? " " + units[remains] : "")
        );
    if (number <= 999)
        return (
            units[Math.floor(number / 100)] +
            " hundred" +
            (number % 100 === 0 ? "" : " " + toReadable(number % 100))
        );
};
