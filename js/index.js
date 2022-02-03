var mainText = document.getElementById("fading_text")
var loadingText = document.getElementById("loading_text")

var textPhase = false;

var phrases = [
    "Форма или содержание",
    "Капитализм - рабство",
    "Стрим - завтра",
    "Котла 6 не будет",
    "Как?",
    "Что?",
    "Почему?",
    "ОСПА - сервер споров"
]

function mainAnimate() {
    var text = mainText.innerHTML;
    while (mainText.innerHTML == text) {
        mainText.innerHTML = phrases[Math.floor(Math.random()*phrases.length)];
    }
}

function loadingAnimate() {
    var text = loadingText.innerHTML;

    if (text.endsWith("...")) {
        loadingText.innerHTML = "Загрузка..";
        textPhase = !textPhase;
    } else if (text.endsWith("..")) {
        if (textPhase) loadingText.innerHTML = "Загрузка.";
        else loadingText.innerHTML = "Загрузка...";
    } else if (text.endsWith(".")) {
        loadingText.innerHTML = "Загрузка..";
        textPhase = !textPhase;
    }
}

function ospa_go() {
    window.open("sWTzHYePKw");
}

function goToNext() {
    window.location.replace("home.html");
}

setInterval(loadingAnimate, 1000);
setTimeout(goToNext, 10000);
mainText.addEventListener("animationiteration", mainAnimate);
mainAnimate();