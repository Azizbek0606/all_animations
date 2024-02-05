let borderImgbx = document.querySelector(".borderImgbx")
let ind = 0
let indImg = 1
let imgboxAll = document.querySelectorAll('.imgbx1')
for (let i = 0; i <8; i++) {
    borderImgbx.children[ind].style.cssText = `
    background: url(../img/${indImg}.jpg);
    background-size:cover;`
    ind ++;
    indImg ++;
}
let imgbx = document.querySelector(".imgbx");

for (let i = 0; i < borderImgbx.children.length; i++) {
    borderImgbx.children[i].addEventListener("click", ()=>{
        for (let k = 0; k <  borderImgbx.children.length; k++) {
            if(borderImgbx.children[k].hasAttribute("on" , "off")){
                borderImgbx.children[k].removeAttribute("on")
            }else{
                borderImgbx.children[i].setAttribute("on" , "off")
            }
        }
    })
}

for(let i = 0;i<imgboxAll.length;i++){
    imgboxAll[i].addEventListener('click',()=>{
        imgbx.style.cssText = `background:url(../img/${i + 1}.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        `
    })
}
