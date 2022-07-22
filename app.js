const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");


// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const projectsMenu = document.querySelector("#projects-page");
    const skillsMenu = document.querySelector("#skills-page");
    const resumeMenu = document.querySelector("#resume-page");
    let scrollPos = window.scrollY;

    const projectSection = document.querySelector("#projects");
    const aboutSection = document.querySelector("#about");
    const skillsSection = document.querySelector("#skills");
    const resumeSection = document.querySelector("#resume");
    const minWidth = 1080;

    var bodyRect = document.body.getBoundingClientRect();
    var offset = 75;

    // adds 'highlight' class to my menu items
    if(window.innerWidth > minWidth && scrollPos < (projectSection.getBoundingClientRect().top - bodyRect.top) - offset) {// make sure it only happens when on desktop version
        homeMenu.classList.add("highlight");
        projectsMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        resumeMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > minWidth && scrollPos < (aboutSection.getBoundingClientRect().top - bodyRect.top) - offset) {
        projectsMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        resumeMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > minWidth && scrollPos < (skillsSection.getBoundingClientRect().top - bodyRect.top) - offset) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        resumeMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > minWidth && scrollPos < (resumeSection.getBoundingClientRect().top - bodyRect.top) - offset) {
        skillsMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        resumeMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > minWidth && scrollPos < 50000) {
        resumeMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        return;
    }

    if((elem && window.innerWidth < minWidth && scrollPos < 600) || elem) {
        elem.classList.remove("highlight");
    }
}

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    } 
}

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

const dogSpringProject = document.querySelector("#project_dogspring");
const websiteProject = document.querySelector("#project_website");
const elfenroadsProject = document.querySelector("#project_elfenroads");
const gradleProject = document.querySelector("#project_gradle")
const gamesProject = document.querySelector("#project_games");
const holeProject = document.querySelector("#project_hole-in-the-wall");
const chemProject = document.querySelector("#project_chemical-engineering");

const showDogSpring = () => {
    if(!dogSpringProject.classList.contains("active")) {
        location.href='#begin__project--info';      
    }
    websiteProject.classList.remove("active");
    elfenroadsProject.classList.remove("active");
    gradleProject.classList.remove("active");
    gamesProject.classList.remove("active");
    holeProject.classList.remove("active");
    chemProject.classList.remove("active");
    dogSpringProject.classList.toggle("active");
}

const showWebsite = () => {
    if(!websiteProject.classList.contains("active")) {
        location.href='#begin__project--info';      
    }
    websiteProject.classList.toggle("active");
    elfenroadsProject.classList.remove("active");
    gradleProject.classList.remove("active");
    gamesProject.classList.remove("active");
    holeProject.classList.remove("active");
    chemProject.classList.remove("active");
    dogSpringProject.classList.remove("active");
}

const showElfenroads = () => {
    if(!elfenroadsProject.classList.contains("active")) {
        location.href='#begin__project--info';
    }
    elfenroadsProject.classList.toggle("active");
    websiteProject.classList.remove("active");
    gradleProject.classList.remove("active");
    gamesProject.classList.remove("active");
    holeProject.classList.remove("active");
    chemProject.classList.remove("active");
    dogSpringProject.classList.remove("active");
}

const showGradle = () => {
    if(!gradleProject.classList.contains("active")) {
        location.href='#begin__project--info';
    }
    gradleProject.classList.toggle("active");
    websiteProject.classList.remove("active");
    elfenroadsProject.classList.remove("active");
    gamesProject.classList.remove("active");
    holeProject.classList.remove("active");
    chemProject.classList.remove("active");
    dogSpringProject.classList.remove("active");
}

const showGames = () => {
    if(!gamesProject.classList.contains("active")) {
        location.href='#begin__project--info';
    }
    gamesProject.classList.toggle("active");
    websiteProject.classList.remove("active");
    gradleProject.classList.remove("active");
    elfenroadsProject.classList.remove("active");
    holeProject.classList.remove("active");
    chemProject.classList.remove("active");
    dogSpringProject.classList.remove("active");
}

const showWall = () => {
    if(!holeProject.classList.contains("active")) {
        location.href='#begin__project--info';
    }
    holeProject.classList.toggle("active");
    websiteProject.classList.remove("active");
    gradleProject.classList.remove("active");
    gamesProject.classList.remove("active");
    elfenroadsProject.classList.remove("active");
    chemProject.classList.remove("active");
    dogSpringProject.classList.remove("active");
}

const showChem = () => {
    if(!chemProject.classList.contains("active")) {
        location.href='#begin__project--info';
    }
    chemProject.classList.toggle("active");
    websiteProject.classList.remove("active");
    gradleProject.classList.remove("active");
    gamesProject.classList.remove("active");
    holeProject.classList.remove("active");
    elfenroadsProject.classList.remove("active");
    dogSpringProject.classList.remove("active");
}