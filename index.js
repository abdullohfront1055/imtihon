let sanagich = 0;
let i = 0;

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let input = document.querySelector("input");
let p = document.querySelector("p");

let savollar = [ "7 + 7 = ?", "5 * 8 = ?", "20 - 15 = ?", "45 % 5 = ?"];
let javoblar = ["14", "40", "5", "9"];

button1.addEventListener("click", (event) =>{
    event.preventDefault();

    p.textContent = savollar[0];
});

button2.addEventListener("click", (event) =>{
    event.preventDefault();

    if (input.value === javoblar[i]) {
        sanagich = sanagich + 1;
    }

    i = i + 1;

    if (i === 4) {
        p.textContent = `Siz ${sanagich} savolga to'g'ri javob berdingiz`;
        input.value = "";
        return;
    }

    p.textContent = savollar[i];

    input.value = "";
});


