let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');

let response1 = document.querySelector('.response1'); 
let response2 = document.querySelector('.response2'); 
let response3 = document.querySelector('.response3'); 
let response4 = document.querySelector('.response4'); 

first.addEventListener('click', ()=>{
    response1.classList.toggle('display');
})

second.addEventListener('click', ()=>{
    response2.classList.toggle('display');
})

third.addEventListener('click', ()=>{
    response3.classList.toggle('display');
})

fourth.addEventListener('click', ()=>{
    response4.classList.toggle('display');
})