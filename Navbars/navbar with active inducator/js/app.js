let acardion = document.querySelectorAll(".icon");
acardion.forEach(elem =>{
    elem.addEventListener("click" , ()=>{
        acardion.forEach(elem1  =>{
            if (elem1.hasAttribute("on" , "heyt")) {
                elem1.removeAttribute("on")
            }else{
                elem.setAttribute("on" , "heyt")
            }
        })
    })
})
let list = document.querySelectorAll('.icon');
function activeLink(){
    list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink))