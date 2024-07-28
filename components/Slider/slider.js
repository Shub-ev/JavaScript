let img = ["../../images/0.png", "../../images/1.png", "../../images/2.png"];

const slider = document.getElementById("slider");
let a = 0

const slide = () => {
    if(a>2) a = 0;
    slider.src = `${img[a]}`;
    console.log(a);
    a++;
}

window.setInterval(slide, 3000);