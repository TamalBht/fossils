
var listItems = document.querySelectorAll("#alb li");
var listImgs = document.querySelectorAll("#alb-img-content li");
var selectedItem = null;
var listData =document.querySelectorAll(".alb-songs ul");
var gallItems = document.querySelectorAll("#gall-list li");
var fbContent = document.querySelectorAll(".fb-container");
window.onload = function() {
    
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", function(event) {
            if (selectedItem) {
                selectedItem.classList.remove("li-color");
            }
            selectedItem = event.target;
            selectedItem.classList.add("li-color");
        });
    }
};

  

listItems[0].addEventListener("click",function(event){
        for(var j=0; j<8; j++){    
            if(j!=0){
                listImgs[j].classList.add("remove");
                listData[j].classList.add("remove");
            }
            if(j==0){
                listData[j].classList.remove("remove");
                listImgs[j].classList.remove("remove");
            }
            
        }
});
listItems[1].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==1){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});listItems[2].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==2){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});listItems[3].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==3){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});listItems[4].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==4){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});listItems[5].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==5){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});listItems[6].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==6){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});listItems[7].addEventListener("click",function(event){
    for(var j=0; j<8; j++){    
        if(j==7){
            listImgs[j].classList.remove("remove");
            listData[j].classList.remove("remove");
        }
        else{
            listImgs[j].classList.add("remove");
            listData[j].classList.add("remove");
        }
        
    }
});
gallItems[0].addEventListener("click",function(){
    fbContent[0].classList.remove("remove");
    fbContent[1].classList.add("remove");
    fbContent[2].classList.add("remove");
    gallItems[0].classList.add("li-color");
    gallItems[1].classList.remove("li-color");
    gallItems[2].classList.remove("li-color");
});
gallItems[1].addEventListener("click",function(){
    fbContent[1].classList.remove("remove");
    fbContent[0].classList.add("remove");
    fbContent[2].classList.add("remove");
    gallItems[1].classList.add("li-color");
    gallItems[0].classList.remove("li-color");
    gallItems[2].classList.remove("li-color");
});
gallItems[2].addEventListener("click",function(){
    fbContent[2].classList.remove("remove");
    fbContent[1].classList.add("remove");
    fbContent[0].classList.add("remove");
    gallItems[2].classList.add("li-color");
    gallItems[1].classList.remove("li-color");
    gallItems[0].classList.remove("li-color");
});
    




