let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
let form3 = document.querySelector('#form3');


let next1 = document.querySelector('#next1');
let pre1 = document.querySelector('#pre1');
let next2 = document.querySelector('#next2');
let pre2 = document.querySelector('#pre2');




function leftDivShow(){
    form1.style.left = '-450px';
    form2.style.left = '40px';
}

next1.addEventListener('click', leftDivShow);



function leftDivShow1(){
    form1.style.left = '40px';
    form2.style.left = '450px';
}

pre1.addEventListener('click', leftDivShow1);



function leftDivShow2(){
    form2.style.left = '-450px';
    form3.style.left = '40px';
}

next2.addEventListener('click', leftDivShow2);



function leftDivShow3(){
    form2.style.left = '40px';
    form3.style.left = '450px';
}

pre2.addEventListener('click', leftDivShow3);
