let inputMonth = prompt("Nhập vào tháng (1-12):");
let inputYear = prompt("Nhập vào năm:");
let month = parseInt(inputMonth);
let year = parseInt(inputYear);

if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
    console.log("Giá trị nhập vào không hợp lệ.");
} else {
    let daysInMonth;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
            break;
        default:
            console.log("Giá trị tháng không hợp lệ.");
            break;
    }
    console.log(`Tháng ${month} năm ${year} có ${daysInMonth} ngày.`);
}
