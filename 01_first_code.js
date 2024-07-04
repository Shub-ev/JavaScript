const func = () => {
    const name = prompt("Enter Your name : ");
    const str = document.querySelector("button").textContent;
    btn.textContent = str + " " + name;
}

const func2 = () => {
    window.alert("Div Clicekd");
}

const btn = document.querySelector("button");
const dv = document.getElementById("dv");
dv.addEventListener("click", func2);
btn.addEventListener("click", func);