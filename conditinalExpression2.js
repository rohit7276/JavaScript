// ***** do while loop *****

let a = 1;
do{
    a++;
    console.log(a);
}
while(a<10)

// **** for loop ****
for(let i=1; i<5; i++){
    console.log(i);
}

// **** Break statement *****
for (let i=1; i<10; i++){
    console.log(i);
    if(i==3){
        break;
    }
}

// ***** Continue statement *****
for(let i = 1; i<6; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

// ***** Comma operator *****
let x =10;
let y = (x++, x+1);
console.log(x,y);