//arithmetic opeartors

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);
var x = 0;
console.log(++x);
console.log(--x);
//comparision operator
console.log(2 == 3);
console.log(2<3);
console.log(2>3);
console.log(2<=3);
console.log(2>=3);
console.log(2!=3);
//logical operators
console.log('logical');
console.log(2==3 && 2<=3);
console.log(2==3 || 2<=3);
for(var i=0;i<=10;i++){
    console.log(i);
    
}
let g = 10;
while(g<100)
    {
        g*=5;
        console.log(g); //mark the output
    }
do{
    g*=5;
    console.log(g);
}while(g<100) //mark the output
let age=19;
if((age >= 14) && (age<19))
    {
        console.log('if');
    }
else{
    console.log('else');
}
age = 15;
switch(age){
    case 15:
        console.log(age);
        break;
    case 19: 
        console.log(age);
        break;
}
let j = 'abheceey';
console.log(j);
console.log(j.length);
console.log(j.indexOf('bhe')); 
console.log(j.split(''));
console.log(j.toUpperCase());
console.log(j.toLocaleLowerCase());
console.log(j.slice(2,6));

let pi = Math.PI;
console.log(pi);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.exp(2));
console.log(Math.max(-1,106660,1006));
console.log(Math.min(-1,106660,1006));
console.log(Math.sqrt(144));
console.log(Math.abs(-1.1006));
console.log(Math.round(4.88));
console.log(Math.pow(3,4));