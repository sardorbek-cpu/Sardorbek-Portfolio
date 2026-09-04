/* =========================
   SARDORBEK PORTFOLIO
   JavaScript
========================= */


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});


/* =========================
   REMEMBER THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}


/* =========================
   TYPING EFFECT
========================= */

const typingText = [
    "AI Enthusiast",
    "Web Developer",
    "Future Technologist",
    "Creative Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const subtitle = document.querySelector(".subtitle");

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!deleting) {

        subtitle.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        subtitle.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex === typingText.length) {
                textIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    revealObserver.observe(section);
});


/* =========================
   CURRENT YEAR
========================= */

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${year} Sardorbek Abdumajidov`;

}
/* =========================
   LANGUAGE SYSTEM
========================= */

const translations = {

    uz: {
        home: "Bosh sahifa",
        about: "Men haqimda",
        skills: "Ko‘nikmalar",
        projects: "Loyihalar",
        goals: "Maqsadlar",
        contact: "Aloqa"
    },

    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        goals: "Goals",
        contact: "Contact"
    },

    ru: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        projects: "Проекты",
        goals: "Цели",
        contact: "Контакты"
    }

};


const langButtons = document.querySelectorAll(".lang-btn");

const navLinks = document.querySelectorAll(".navbar nav a");


function changeLanguage(language) {

    const t = translations[language];

    navLinks[0].textContent = t.home;
    navLinks[1].textContent = t.about;
    navLinks[2].textContent = t.skills;
    navLinks[3].textContent = t.projects;
    navLinks[4].textContent = t.goals;
    navLinks[5].textContent = t.contact;


    langButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.lang === language) {
            button.classList.add("active");
        }

    });


    localStorage.setItem("language", language);
}


langButtons.forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


const savedLanguage =
    localStorage.getItem("language") || "uz";

changeLanguage(savedLanguage);
/* =========================
   LANGUAGE CONTENT SWITCH
========================= */

const languageContents =
    document.querySelectorAll(".lang-content");

function updateLanguageContent(language) {

    languageContents.forEach(content => {

        if (content.dataset.language === language) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }

    });

}


/* Start with saved language */
updateLanguageContent(savedLanguage);


/* Change content when language button is clicked */

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedLanguage = button.dataset.lang;

        updateLanguageContent(selectedLanguage);

    });

});
