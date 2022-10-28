function Argumen(text, index_pertama, index_terakhir) {
    var hasil = "";
    for (var index = index_pertama; index < index_terakhir; index++) {
        hasil += text[index];
    }
    return hasil;
}
console.log(Argumen("Learning Typescript is different than Javascript", 9, 19));
