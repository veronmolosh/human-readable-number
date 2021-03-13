module.exports = function toReadable(number) {
    const numToTwenty = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ];
    const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    let i;
    let stringReturn;
    let stringReturnHundred;
    let numReadable1;
    let numReadable2;

    for (i = 21; i < 1000; i++) {
        if (i < 100) {
            if (i % 10 === 0) {
                stringReturn = ''; //если нет остатка от деления, то ни чего не передаем
            } else {
                stringReturn = ' ' + numToTwenty[i % 10];
            }
            numReadable1 = tens[Math.floor(i / 10)] + stringReturn;
            numToTwenty.push(numReadable1);
        } else {
            if (i % 100 === 0) {
                stringReternHundred = ''; //если нет остатка от деления, то ни чего не передаем
            } else {
                stringReturnHundred = ' ' + numToTwenty[i % 100];
            }
            numReadable2 = numToTwenty[Math.floor(i / 100)] + ' hundred' + stringReturnHundred;
            numToTwenty.push(numReadable2);
        }
    }
    return numToTwenty[number];
}