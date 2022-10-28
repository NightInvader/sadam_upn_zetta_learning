function Argumen(text: string, index_pertama: number, index_terakhir: number):string{
    let hasil: string="";

    for (let index=index_pertama; index < index_terakhir; index++){
        hasil += text[index];
    }
    return hasil;
}
    console.log(Argumen("Learning Typescript is different than Javascript",9,19));