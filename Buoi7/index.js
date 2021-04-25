//switch case
// let key =1;
// switch (key) {
//     case 0:
//         console.log("key =0");
//         break;
//     case 1:
//         console.log("key =1");
//         break;
//     case 2:
//         console.log("key =2");
//         //break;
//     default:
//         break;
// }

//vòng lặp for, while, do while

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// let array=['chanh', 'cam', 'quyt']
// for (let index = 0; index <array.length; index++) {
//     // const element = array[index];
//     console.log(array[index]);
// }

// i++ => i=i+1
//i+=2 => i= i+2
//i+=4 => i= i+3
//vong lap 2for
// for (let i=0; i < 10; i++){
//     for (let j=0; j<10; j++)
//     {
//         console.log("i, j", i, j);
//     }
// }
//let number=0;
// while (number<10) {
//     console.log(number);
//     number++;
// }
// do{
//     console.log(number);
//     number++;
// } while(number<10)

//nhap vao mot so tu nhien => in ra cac so le tu 0 đên số đó
// let indexx =10;
// for (let index = 1;index<=indexx; index+=2) {
//  // if (index %2 !==0) 
//     {
//        console.log(index);
//    }
// }

// let input= window.prompt("1234444")
// console.log(typeof input);

// let n =10 ;
// let check = true;
//     if (n<2) {
//         check = false;
//     }
//     else if (n==2) {
//         check =true;
//     }
//     else{
//         for (let index = 3; index < n-1; index+=2){
//             if (n % index ==0) {
//                 check = false;
//                 break;
//             } 
//         }
//     }
//     if (check) {
//         console.log( n+"La so nguyen to");
//     }else{
//         console.log(n+" Khong la so nguyen to");
//     }

//function
// function hello(name, age){
//     console.log(`Xin chao ${name} ${age}`);
//     return 12;
// }
// hello("Quan", 22);

//cau1
let ketqua1 = document.getElementById("ketqua1");
let arr1 = [];
function cauMot(){
    let soN1 = document.getElementById("soN1").value;
    console.log(soN1);
    for(let i = 1; i <= soN1; i++){
        console.log(i);
        arr1.push(i);
        ketqua1.innerHTML += `${i} `;
    }
}

// cau 2

let ketqua2 = document.getElementById("ketqua2");
let arr2 = [];
function cauHai(){
    let soN2 = document.getElementById("soN2").value;
    console.log(soN2);
    for(let i = 1; i <= soN2; i++){
        if( i % 2 == 1){
            console.log(i);
            arr2.push(i);
            ketqua2.innerHTML += `${i} `;
        }
        
    }
}

// cau 3

let ketqua3 = document.getElementById("ketqua3");
let arr3 = [];
function cauBa(){
    let soN3 = document.getElementById("soN3").value;
    console.log(soN3);
    for(let i = 1; i <= soN3; i++){
        if( i % 2 == 0){
            console.log(i);
            arr3.push(i);
            ketqua3.innerHTML += `${i} `;
        }
        
    }
}

// cau 5

let ketqua5 = document.getElementById("ketqua5");
let tong5 = 0;
function cauNam(){
    let soN5 = document.getElementById("soN5").value;
    for(let i = 1; i <= soN5; i++){
        tong5 += i;
        ketqua5.innerHTML = `Tong = ${tong5} `;
        
    }
}

// cau 6

let ketqua6 = document.getElementById("ketqua6");
let tong6 = 0;
function cauSau(){
    let soN6 = document.getElementById("soN6").value;
    for(let i = 1; i <= soN6; i++){
        tong6 += i * i;
        ketqua6.innerHTML = `Tong = ${tong6} `;
    }
}

// cau 7

let ketqua7 = document.getElementById("ketqua7");
let tong7 = 0;
function cauBay(){
    let soN7 = document.getElementById("soN7").value;
    for(let i = 1; i <= soN7; i++){
        if( i % 2 == 1){
            tong7 += i;
            ketqua7.innerHTML = `Tong = ${tong7} `;
        }
    }
}

// cau 8

let ketqua8 = document.getElementById("ketqua8");
let check = false;
let arr8 = [];
function cauTam(){
    let soN8 = document.getElementById("soN8").value;
    soN8 = soN8.split("", 10);
    console.log(soN8);
    for(let i = 0; i <= soN8.length-1; i++){
        console.log(soN8[i]);
        if( soN8[i] % 2 == 1){
            console.log('So du la '+soN8[i]);
            arr8.push(soN8[i]);
            console.log("mang sau duyet "+arr8);
            check = true;
        }else if( soN8[i] % 2 == 0){
            check = false;
            break;
        }
    }
    ketqua8.innerHTML = `Ket qua = ${check}`;
}