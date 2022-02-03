var hello = document.getElementById("hello_text");
var ospaImage = document.getElementById("ospa_image");

var step = 0;
var ManChars = ", человек".split("");
var OtherChars = ". Ты, надеюсь, знаешь что такое ОСПА?".split("");
var interval = 0;

function printMan() {
    if (ManChars.length > step) hello.innerHTML += ManChars[step];
    else { 
        clearInterval(interval); 
        hello.style.marginTop = "2vh";
    }

    step += 1;
}

function printOtherText() {
    if (OtherChars.length > step) hello.innerHTML += OtherChars[step];
    else { 
        clearInterval(interval); 
    }

    step += 1;
}

ospaImage.addEventListener("click", () => {
    window.open("https://discord.com/invite/sWTzHYePKw");
});

hello.addEventListener("animationend", () => {
    step = 0;
    interval = setInterval(printOtherText, 50);
})

setTimeout(() => {
    interval = setInterval(printMan, 252);
}, 2000)
