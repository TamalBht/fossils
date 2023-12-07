const mem = document.querySelector('#members');
const memcon = document.querySelector('#mcontent');
const heading = document.querySelector('#memHead');
const hero = document.querySelector('#hero');

function limit(){
    if(hero.getBoundingClientRect().bottom>=200 ){
        heading.setAttribute('style','position:static');
        memcon.classList.remove('member-content');
    }
    else{
        heading.setAttribute('style','position:fixed');
        memcon.classList.add('member-content');

    }
    if(mem.getBoundingClientRect().bottom<=680 ){
        heading.classList.add('remove');
    }
    else{
        heading.classList.remove('remove');
    }

}
addEventListener('scroll',limit);