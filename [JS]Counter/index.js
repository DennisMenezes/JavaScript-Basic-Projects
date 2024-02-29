const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");
const countElement = document.getElementById("count");
let count = document.querySelector("count");

const con = document.querySelector("#count");
let counter = 0;

function updateCount(counter) {
    con.textContent = count;

    if (count < 0) {
        con.style.color = "red";
    } else if (count > 0) {
        con.style.color = "green";
    } else {
        con.style.color = "black";
    }
}


btnDecrease.addEventListener("click", () => {
    count--;
    console.log(count);
    updateCount(count);
});


btnReset.addEventListener("click", () => {
    count = 0;
    console.log(count);
    updateCount(count);
});

btnIncrease.addEventListener("click", () => {
    count++;
    console.log(count);
    updateCount(count);
});