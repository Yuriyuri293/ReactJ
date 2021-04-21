// console.log("heloo"); //console in ra 
// console.log("heloo");
// console.log("Start");
//kb biến: var, let, const
var a='day la 11';
var b= '22 ';
var c= '33';
var e= b +c;
var d= `la ${b} 5555 ${c} do ${a}`;

var testBoolF = false;
var testBoolT = true;

// console.log(testBoolT);
var car ={ //khai bao object()
    color: 'red',
    price: 1000,
    isBuy: true
}
// console.log(car.price);

var array=[   //dang mảng từ 0
    "1",
    2,
    car.price
]
// console.log(array[1]);
// var undefA;
// console.log(typeof undefA);//undefined

var nullA = null;//phai co gia tri
// console.log(nullA);
//  console.log(typeof NaN); //NaN là số nhưng dùng kp số  
 
 let scopeA=30; //var hay lỗi
//  console.log(scopeA);

const hangsoA = 'test const'
// hangsoA= 'change const'
const hangsoB= {
    data: [1,2,3,4],
    name: 'quanxauxi'
}
// hangsoB.name='quan' //thay vào name trên
// console.log(hangsoB);

// //phep toan js + - * /
// let congA = 10;
// let congB = '3';
// result= congA + congB
// console.log(result);

//phep toan so sanh <,> ,== (sosanh ve gia tri), =<, >=, !=, === (sosanh ve kieu dulieu), !== (kieu dl ca giatri)

let sosanhA =20;
let sosanhB ='20';

console.log(sosanhA === sosanhB);

//câu điều kiện
let sosanhA =3;
if(sosanhA<sosanhB){
    console.log("2thang bang nhau");
}
else if( ){
    console.log("Khac nhau");
}