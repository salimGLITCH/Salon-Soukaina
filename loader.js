/* ===========================
   SALON SOUKAINA LOADER
=========================== */

const petals = document.getElementById("petals");
const sparkles = document.getElementById("sparkles");

// إنشاء بتلات الورد
function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = Math.random() > 0.5 ? "🌸" : "🌺";

    petal.style.left = (-100 - Math.random() * 300) + "px";

    petal.style.top = (Math.random() * window.innerHeight) + "px";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    petal.style.animationDuration = (4 + Math.random() * 3) + "s";

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 7000);

}

setInterval(createPetal, 180);

// إنشاء اللمعان
for (let i = 0; i < 60; i++) {

    const star = document.createElement("div");

    star.className = "spark";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";

    sparkles.appendChild(star);

}

// إخفاء اللودر بعد 5 ثوانٍ
setTimeout(() => {

    const loader = document.getElementById("loader");

    loader.classList.add("loader-hide");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1200);

}, 5000);