let canh1 = parseFloat(prompt("Nhập độ dài cạnh 1: "));
let canh2 = parseFloat(prompt("Nhập độ dài cạnh 2: "));
let canh3 = parseFloat(prompt("Nhập độ dài cạnh 3: "));

if ( canh1 > 0 && canh2 > 0 && canh3 > 0 && canh1 + canh2 > canh3 && canh2 + canh3 > canh1 && canh1 + canh3 > canh2) {
    console.log("Hợp lệ");
} else {
    console.log("Không hợp lệ");
}
