let container = document.querySelector(".container")
for (let i = 0; i < 120; i++) {
    let cube = document.createElement("div")
    cube.classList.add("cube")
    container.append(cube)
}
// setInterval(() => {
//     container.children[Math.round(Math.random() * container.children.length)].style.cssText = "background-color:white;box-shadow:0px 0px 10px white"
// }, 300);

// setInterval(() => {
//     container.children[Math.round(Math.random() * container.children.length)].style.cssText = "background-color:#951159;box-shadow:0px 0px 10px #951159"
// }, 700);

// setInterval(() => {
//     container.children[Math.round(Math.random() * container.children.length)].style.cssText = "background-color:#159951;box-shadow:0px 0px 10px #159951"
// }, 1200);
// setInterval(() => {
//     for (let i = 0; i < container.children.length; i++) {
//         container.children[i].style.cssText = "background-color:transparent; box-shadow:none;"
//     }
// }, 3000);