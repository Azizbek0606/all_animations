const logo = document.querySelectorAll("#logo path");
for (let i = 0; i < logo.length; i++) {
    console.log(`latter is ${i} is ${Math.round(logo[i].getTotalLength())}`)
}