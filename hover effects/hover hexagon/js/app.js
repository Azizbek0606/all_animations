let kub26 = document.querySelectorAll(".wrap_flex")

for (let k = 0; k < kub26.length; k++) {
    for (let i = 0; i < 10; i++) {
    let three2 = document.createElement("div");
    three2.classList ="kub"
    kub26[k].append(three2)
}
}
 
let kub25 = document.querySelectorAll(".wrap_flex1")

for (let k = 0; k < kub25.length; k++) {
    for (let i = 0; i < 10; i++) {
    let three1 = document.createElement("div");
    three1.classList ="kub"
    kub25[k].append(three1)
}
}

let heart = document.createElement("span");
document.addEventListener("mouseover" , function (e){
    let body = document.querySelector(".df1");
    heart.style.left = `${e.screenX - 150}px`
    heart.style.top = `${e.screenY - 150}px`
    body.appendChild(heart);
})