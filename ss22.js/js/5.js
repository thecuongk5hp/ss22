let a = parseFloat(prompt("Mời bạn nhập a"));
let b = parseFloat(prompt("Mời bạn nhập b"));

if ( a === 0){
    if (b === 0){
        console.log("Phương trình có vô số nghiệm");
    } else {
        console.log("Phương trình vô nghiệm");
    }
} else {
    let x = -b/a;
    console.log(`Nghiệm của phương trình là x = ${x}`);
}