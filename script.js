/* ===========================
   SALON SOUKAINA
   SCRIPT.JS - PART 1
=========================== */

// القائمة في الهاتف

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("active");

});

}

// إغلاق القائمة عند الضغط على رابط

document.querySelectorAll(".menu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

// ظهور البطاقات أثناء النزول

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition=".8s";

observer.observe(card);

});

/* ===========================
   PART 2
=========================== */

// تأثير Parallax على الخلفية

window.addEventListener("scroll",()=>{

const circles=document.querySelectorAll(".circle");

let scroll=window.pageYOffset;

circles.forEach((circle,index)=>{

let speed=(index+1)*0.08;

circle.style.transform=`translateY(${scroll*speed}px)`;

});

});

// تأثير Ripple عند الضغط على الأزرار

document.querySelectorAll(".hero-button,.contact-button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

// تأثير خفيف على صور البطاقات

document.querySelectorAll(".card img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const rect=img.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

img.style.transform=

`scale(1.08) rotateX(${(y-rect.height/2)/25}deg)
 rotateY(${-(x-rect.width/2)/25}deg)`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1) rotateX(0) rotateY(0)";

});

});

/* ===========================
   PART 3
=========================== */

// إنشاء ورود متحركة

const petalsContainer=document.createElement("div");

petalsContainer.className="petals-container";

document.body.appendChild(petalsContainer);

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=Math.random()>0.5?"🌸":"🌺";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.opacity=Math.random();

petalsContainer.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,450);

// لمعان بسيط للخلفية

const sparkles=document.createElement("div");

sparkles.className="sparkles";

document.body.appendChild(sparkles);

for(let i=0;i<40;i++){

const star=document.createElement("span");

star.className="spark";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

sparkles.appendChild(star);

}

/* ===========================
   PART 4
=========================== */

// شاشة البداية

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.className="page-loader";

loader.innerHTML=`
<div class="loader-smoke"></div>
<div class="loader-text">Salon Soukaina</div>
`;

document.body.appendChild(loader);

setTimeout(()=>{

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},1200);

},1800);

});


// انتقال احترافي بين الصفحات

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(
href &&
!href.startsWith("#") &&
!href.startsWith("http") &&
!link.hasAttribute("target")
){

link.addEventListener("click",function(e){

e.preventDefault();

const transition=document.createElement("div");

transition.className="page-transition";

document.body.appendChild(transition);

setTimeout(()=>{

window.location.href=href;

},1200);

});

}

});

/* ===========================
   PART 5
=========================== */

// تأثير ظهور العنوان

const titles = document.querySelectorAll(".section-title");

const titleObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(60px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards",
easing:"ease-out"

});

}

});

},{threshold:0.3});

titles.forEach(title=>{

titleObserver.observe(title);

});

// تحريك الأزرار قليلاً

document.querySelectorAll(".hero-button,.contact-button,.social-card").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-8px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// تأثير عند تحميل الصفحة

window.addEventListener("load",()=>{

document.body.animate([

{

opacity:0,

filter:"blur(8px)"

},

{

opacity:1,

filter:"blur(0)"

}

],{

duration:1200,

fill:"forwards",

easing:"ease-out"

});

});

// Scroll إلى الأعلى عند تحديث الصفحة

window.onbeforeunload=function(){

window.scrollTo(0,0);

};

console.log("🌸 Salon Soukaina Loaded Successfully 🌸");