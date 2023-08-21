function solution(riddle) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const n = riddle.length;
    let result = '';

    for (let i = 0; i < n; i++) {
        if (riddle[i] === '?') {
            const prev = result[result.length - 1];
            const next = riddle[i + 1];
            let newChar = alphabet[Math.floor(Math.random() * alphabet.length)];

            while (newChar === prev || newChar === next) {
                newChar = alphabet[Math.floor(Math.random() * alphabet.length)];
            }

            result += newChar;
        } else {
            result += riddle[i];
        }
    }

    return result;
}