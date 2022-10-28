function hitungHarga(buku, diskon, pajak, stok, totalOrder){
    let totalBayar = 0;
    let totalHarga = 0;
    let totalStlhDiskon = 0;
    let totalPajak = 0;

    const harga = buku.harga;
    const totalDiskon = harga * (diskon/100);
    const hargaStlhDiskon = harga - totalDiskon;
    const hargaPajak = hargaStlhDiskon * (pajak/100);
    const hargaStlhPajak = hargaStlhDiskon + hargaPajak;

    for(let index =0;
        index < totalOrder; index++){
            if(buku && buku.harga && (index < stok)){
                totalHarga += buku.harga;
                totalStlhDiskon += hargaStlhDiskon;
                totalPajak += hargaPajak;
            }else{
                console.log('Stok Abis bos');
                break;
            }
        }

    totalBayar = totalStlhDiskon + totalPajak;
    if(buku && buku.harga){

        console.group();
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(buku.judul);
        console.log('Harga Buku \t\t: Rp.',harga);
        console.log('Jumlah Beli \t\t: ',totalOrder);
        console.log('Total Harga \t\t: Rp.',totalHarga);
        console.log('Total Diskon \t\t: Rp.',totalDiskon);
        console.log('Harga setelah Diskon \t\t: Rp.',totalStlhDiskon);
        console.log('Pajak \t\t: Rp.',totalPajak);
        console.log('Total Pembayaran \t\t: Rp.',totalBayar);
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log('Stok yang Tersedia \t\t: Rp.',stok-totalOrder);
        console.log();
        console.groupEnd();
    }
    return totalBayar;
}
hitungHarga({judul:"Sea Of Thieves", harga:250000},20,10,20,2);