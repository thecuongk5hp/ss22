let so1 = parseFloat(prompt("Nhập số thứ nhất: "));
let so2 = parseFloat(prompt("Nhập số thứ hai: "));
let phepTinh = prompt("Nhập phép toán (+, -, *, /): ");

let result;

if (!isNaN(so1) && !isNaN(so2)) {
    switch (phepTinh) {
        case '+':
            result = so1 + so2;
            break;
        case '-':
            result = so1 - so2;
            break;
        case '*':
            result = so1 * so2;
            break;
        case '/':
            if (so2 !== 0) {
                result = so1 / so2;
            } else {
                console.log("Phép chia cho 0 không hợp lệ.");
            }
            break;
        default:
            console.log("Phép toán không hợp lệ.");
    }

    if (result !== undefined) {
        console.log(`Kết quả của phép toán ${so1} ${phepTinh} ${so2} là: ${result}`);
    }
} else {
    console.log("Nhập không hợp lệ. Vui lòng nhập lại số.");
}

