const text = [
    ' ',
    'Hi,\n',
    'I\'m Ruslan'
];

function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.out');

    function typeLine() {
        let interval = setTimeout(function() {
            out += text[line][count];
            htmlOut.innerHTML = "[" + out + " ]";
            count++;


            if (count >= text[line].length) {
                count = 0;
                line++;
                if (line == text.length) {
                    clearTimeout(interval);
                    return true;
                }
            }
            typeLine();
        }, 300);
    }

    typeLine();

}

typeText();
