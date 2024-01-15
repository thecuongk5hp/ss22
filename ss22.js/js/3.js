let number = parseFloat(prompt("Nhập một số: "));

if (number > 0 && Math.sqrt(number) % 1 === 0) {
    console.log(`${number} là số chính phương.`);
} else {
    console.log(`${number} không phải là số chính phương.`);
}