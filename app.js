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
    console.log(scrollPos);

    const minWidth = 1080;



    // adds 'highlight' class to my menu items
    if(window.innerWidth > minWidth && scrollPos < 600) {// make sure it only happens when on desktop version
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > minWidth && scrollPos < 2100) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > minWidth && scrollPos < 3400) {
        projectsMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        homeMenu.classList.remove("highlight");
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

const websiteProject = document.querySelector("#project_website");
const elfenroadsProject = document.querySelector("#project_elfenroads");
const gradleProject = document.querySelector("#project_gradle")
const gamesProject = document.querySelector("#project_games");
const holeProject = document.querySelector("#project_hole-in-the-wall");
const chemProject = document.querySelector("#project_chemical-engineering");

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
}