let btnBox = document.querySelector(".btnBox");
let ind = 0
setInterval(function(){
    ind++;
    if(ind == 2){
        ind = 0
    }
    btnBox.style.cssText = `transform:translateY(-${ind * 65}px)`
},1000)