let img = document.getElementById("imgID")
console.log(img);

img.addEventListener("click", () => {
    let source = img.src.split('/').pop();
    console.log(source);

    if(source === "image.png"){
        img.src = "./images/image1.png";
    }
    else{
        img.src = "./images/image.png";
    }
})