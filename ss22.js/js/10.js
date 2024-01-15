// Khai báo một số biến với các giá trị truthy và falsy
let truthyValue = "Hello, World!";
      // Một chuỗi không rỗng được coi là truthy
let falsyValue = "";
      // Chuỗi rỗng được coi là falsy

      // Sử dụng câu lệnh điều kiện if để kiểm tra truthy và falsy
if (truthyValue) {
    console.log("Biến truthyValue là truthy.");
      // Được thực hiện nếu truthyValue là truthy
} else {
    console.log("Biến truthyValue là falsy.");
      // Được thực hiện nếu truthyValue là falsy
}

if (falsyValue) {
    console.log("Biến falsyValue là truthy.");
      // Được thực hiện nếu falsyValue là truthy
} else {
    console.log("Biến falsyValue là falsy.");
      // Được thực hiện nếu falsyValue là falsy
}