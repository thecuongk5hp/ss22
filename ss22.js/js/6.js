let bonChuSo = parseInt(prompt("Nhập vào một số có 4 chữ số: "));

if (bonChuSo >= 1000 && bonChuSo <= 9999) {
    let hangNghin = Math.floor(bonChuSo / 1000);
    let du = bonChuSo % 1000;
    let hangTram = Math.floor(du / 100);
    du = du % 100;
    let hangChuc = Math.floor(du / 10);
    let donVi = du % 10;

    console.log(`Chữ số hàng nghìn: ${hangNghin}`);
    console.log(`Chữ số trăm: ${hangTram}`);
    console.log(`Chữ số chục: ${hangChuc}`);
    console.log(`Chữ số đơn vị: ${donVi}`);
} else {
    console.log("Vui lòng nhập một số có 4 chữ số.");
}