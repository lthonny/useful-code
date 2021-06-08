let i;
for (console.log('statement 1'), i = 0; console.log('statement 2'), i < 5; console.log('statement 3'), ++i) {
    console.log('statement4')
    console.log(`------- ${i}--------`)
}

let i = 0;
do {
    console.log(`------- ${i}--------`)
    console.log('statement 1')
    i++;
}
while (console.log('statement 2'), i < 5)

let i = 0;
while (console.log('statement 1'), i < 5) {
    console.log(`------- ${i}--------`)
    console.log('statement 2')
    i++;
}


let i;
for ( i = 0; i < 5; i++) {
    if(i%2 === 0){
        continue;
    }
    console.log(i);
}


let i;
for ( i = 0; i < 5; i++) {
    if(i%2 === 0){
        break;
    }
    console.log(i);
}

outer: for(let i=0; i < 5; i++){
    console.log('i = ', i);
    for(let j=0; j < 5; j++){
        console.log('j = ', j);
        if(j%2 === 0){
            continue outer;
        }
    }
}

outer: for(let i=0; i < 5; i++){
    console.log('i = ', i);
    for(let j=0; j < 5; j++){
        console.log('j = ', j);
        if(j%2 === 0){
            break outer;
        }
    }
}