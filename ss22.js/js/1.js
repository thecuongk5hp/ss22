let a = parseInt(prompt("Nhập số a: "));
let b = parseInt(prompt("Nhập số b: "));

if (a % b === 0) {
    console.log(`${a} chia hết cho ${b}`);
} else if (b % a === 0) {
    console.log(`${b} chia hết cho ${a}`);
} else {
    console.log(`${a} không chia hết cho ${b}  và ngược lại`);
}