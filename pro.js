const words = [

"Hi, I'm Fatima 👋",

"Cybersecurity Student",

"Front-End Developer",

"Web Security Learner"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const translations = {

    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        social: "Social",

        heroText: "Cybersecurity Student | Front-End Developer Passionate about Web Development and Ethical Hacking.",

        contact: "Contact Me",

        aboutTitle: "About Me",
        skillsTitle: "Skills",
        certificatesTitle: "Certificates",
        projectsTitle: "Projects",
        socialTitle: "Social Media",
        statisticsTitle: "Statistics",

        footer: "Cybersecurity Student | Front-End Developer"
    },

    ar: {
        home: "الرئيسية",
        about: "نبذة",
        skills: "المهارات",
        projects: "المشاريع",
        social: "التواصل",

        heroText: "طالبة أمن سيبراني ومطورة واجهات أمامية، شغوفة بتطوير الويب والاختراق الأخلاقي.",

        contact: "تواصل معي",

        aboutTitle: "نبذة عني",
        skillsTitle: "المهارات",
        certificatesTitle: "الشهادات",
        projectsTitle: "المشاريع",
        socialTitle: "التواصل",
        statisticsTitle: "الإحصائيات",

        footer: "طالبة أمن سيبراني | مطورة واجهات أمامية"
    }

};

const typing = document.getElementById("typing");

function typeEffect(){

let current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}

else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const increment = 1;

            const updateCounter = () => {

                if(count < target){

                    count += increment;

                    counter.innerText = count;

                    setTimeout(updateCounter,1000);

                }else{

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 100;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1000);

},2200);

});
// Cursor

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});
const cards = document.querySelectorAll(".certificate");

const modal = document.getElementById("certificateModal");

const modalImg = document.getElementById("certificateImage");

const comingSoon = document.getElementById("comingSoon");

const closeBtn = document.querySelector(".close");

cards.forEach(card=>{

    card.onclick=()=>{

        let image = card.dataset.image;

        modal.style.display="flex";

        if(image==" "){

            modalImg.style.display="none";

            comingSoon.style.display="block";

        }

        else{

            modalImg.src=image;

            modalImg.style.display="block";

            comingSoon.style.display="none";

        }

    }

});

closeBtn.onclick=()=>{

    modal.style.display="none";

}

window.onclick=(e)=>{

    if(e.target==modal){

        modal.style.display="none";

    }

}
const projects = document.querySelectorAll(".project");

const projectModal = document.getElementById("projectModal");

const projectContent = document.getElementById("projectContent");

const closeProject = document.querySelector(".closeProject");

projects.forEach(card=>{

    card.onclick=()=>{

        let project = card.dataset.project;

        projectModal.style.display="flex";

        if(project=="portfolio"){

            projectContent.innerHTML=`
            <h2 style="color:#6dff6d;">Portfolio Website</h2>

            <p>This portfolio was built using HTML, CSS and JavaScript.</p>

            <button class="btn">Open Project</button>
            `;

        }

        else{

            projectContent.innerHTML=`
            <h2 style="color:#6dff6d;">🚧 Coming Soon</h2>

            <p>This project will be added soon.</p>
            `;

        }

    }

});

closeProject.onclick=()=>{

projectModal.style.display="none";

}

window.addEventListener("click",e=>{

if(e.target==projectModal){

projectModal.style.display="none";

}

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
};
const langBtn = document.getElementById("langBtn");

let english = true;

langBtn.onclick = function () {

    if (english) {

        document.getElementById("navHome").innerHTML = "الرئيسية";
        document.getElementById("navAbout").innerHTML = "نبذة";
        document.getElementById("navSkills").innerHTML = "المهارات";
        document.getElementById("navProjects").innerHTML = "المشاريع";
        document.getElementById("navSocial").innerHTML = "التواصل";

        document.getElementById("heroText").innerHTML =
        "طالبة أمن سيبراني ومطورة واجهات أمامية، شغوفة بتطوير الويب والاختراق الأخلاقي.";

        document.getElementById("contactBtn").innerHTML = "تواصل معي";

        langBtn.innerHTML = "🇮🇶";

    } else {

        document.getElementById("navHome").innerHTML = "Home";
        document.getElementById("navAbout").innerHTML = "About";
        document.getElementById("navSkills").innerHTML = "Skills";
        document.getElementById("navProjects").innerHTML = "Projects";
        document.getElementById("navSocial").innerHTML = "Social";

        document.getElementById("heroText").innerHTML =
        "Cybersecurity Student | Front-End Developer Passionate about Web Development and Ethical Hacking.";

        document.getElementById("contactBtn").innerHTML = "Contact Me";

        langBtn.innerHTML = "🌍";
    }

    english = !english;
}
