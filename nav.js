const hamburger= document.querySelector('#toggle');
const x = document.querySelector('#cross');
const menu =  document.querySelector('#media-menu');
const inp = document.querySelectorAll("form label");
function enable(){
    menu.classList.remove('remove');
}
function disable(){
    menu.classList.add('remove');
}
hamburger.addEventListener('click',enable);
cross.addEventListener('click',disable);
/*for form */
inp[0].addEventListener('click',function(){
   if(inp[0].value==""){
        inp[0].classList.remove('pop-up');
   }
   else{
    inp[0].classList.add('pop-up');
   }
});inp[1].addEventListener('click',function(){
    if(inp[1].value==""){
         inp[1].classList.remove('pop-up');
    }
    else{
     inp[1].classList.add('pop-up');
    }
 });inp[2].addEventListener('click',function(){
    if(inp[2].value==""){
         inp[2].classList.remove('pop-up');
    }
    else{
     inp[2].classList.add('pop-up');
    }
 });inp[3].addEventListener('click',function(){
    if(inp[3].value==""){
         inp[3].classList.remove('pop-up');
    }
    else{
     inp[3].classList.add('pop-up');
    }
 });
