var kasus1 = [1, 'data', '3', 'result'];
var kasus2 = ['Bejo', 'has', '4', 'sport', 'car'];
function gabung(array) {
    var result = "";
    array.map(function (array) {
        result = result + " " + array;
    });
    return result;
}
console.log(gabung(kasus1));
console.log(gabung(kasus2));
