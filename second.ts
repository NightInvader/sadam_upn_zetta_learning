let kasus1 = [1, 'data', '3', 'result']
let kasus2 = ['Bejo', 'has', '4', 'sport', 'car']

function gabung(array: (string | number)[]): string {
    let result: string = "";
    array.map((array) => {
      result = result + " " + array;
    });
    return result;
  }

console.log(gabung(kasus1));
console.log(gabung(kasus2));