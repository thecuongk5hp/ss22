let a = parseFloat(prompt("Mời bạn nhập a"));
let b = parseFloat(prompt("Mời bạn nhập b"));
let c = parseFloat(prompt("Mời bạn nhập c"));
let delta = b*b - 4*a*c;

if (delta > 0){
    let x1 = (-b + Math.sqrt(delta)) / ( 2 * a);
    let x2 = (-b - Math.sqrt(delta)) / ( 2 * a);
    console.log(`phương trình có 2 nghiệm x1 = ${x1} , x2 = ${x2}`);
} else if (delta = 0){
    let x= -b / ( 2 * a);
    console.log(`Phương trình có nghiệm kép x = ${x}`);
} else {
    console.log("Phương trình vô nghiệm");
}