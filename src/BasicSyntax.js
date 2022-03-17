export function romanToInteger(str) {
    let result = 0;
    str = str.split('');
    for (let i = 0; i <= str.length - 1; i++) {
        switch (str[i]) {
            case 'I':
                str[i] = 1;
                break;
            case 'V':
                str[i] = 5;
                break;
            case 'X':
                str[i] = 10;
                break;
            case 'L':
                str[i] = 50;
                break;
            case 'C':
                str[i] = 100;
                break;
            case 'D':
                str[i] = 500;
                break;
            case 'M':
                str[i] = 1000;
                break;
            default:
                str[i] = 0;
        }
    }
    for (let j = 0; j <= str.length - 1; j++) {
        if (str[j] < str[j + 1]) {
            result -= str[j];
        } else {
            result += str[j];
        }
    }

    return result;
}
