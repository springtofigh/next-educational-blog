export function convertToPersianNumbers(n) {
    const persianNumbers = ['۰', '۱','۲','۳', '۴','۵','۶','۷','۸','۹'];
    return n.toString().replace(/[0-9]/g, (x) => persianNumbers[parseInt(x)]);
}