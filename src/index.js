const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = expr.match(/\d{10}|\*{10}/g);
    // console.log(exprArr);

    let decodeArr = exprArr.map(function (item, i, arr) {
        if (item == "**********") {
            return ' ';
        }
        else {
            return item.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
        }
    });

    let decodedMessage = decodeArr.map(code => {
        if (code == ' ') return ' ';
        for (let key in MORSE_TABLE) {
            if ( code == key ) {
                // console.log('key: ', key);
                // console.log(MORSE_TABLE[key]);
                return MORSE_TABLE[key];
            }
            else {
                // console.log('Что то не так', key)
            }
        }
    });
    console.log(decodedMessage.join(''));

    return decodedMessage.join('');
}

module.exports = {
    decode
}