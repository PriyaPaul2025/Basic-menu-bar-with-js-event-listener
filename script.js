// function myFunction(){
//     let x= "Hello ";
//     let y = document.getElementById('fname').value;
//     let z=', how are you doing?'
//     let msg = x + y + z ;
//     console.log(msg);
//     const output = document.getElementById('msgOutput');
//     output.innerHTML= msg;
// }
 const menu= document.querySelector(".menu");
 const close= document.querySelector(".close");
 const nav= document.querySelector("nav");
 const ul=document.querySelector("ul");
 menu.addEventListener('click', ()=>{
    nav.style.height='100%';
    ul.style.display='flex';
    menu.style.display='none';
    close.style.display='initial';
 });
 close.addEventListener('click', ()=>{
    nav.style.height='10%';
    ul.style.display='none';
    menu.style.display='initial';
    close.style.display='none';
 });
 