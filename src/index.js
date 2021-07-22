import nav from "./nav";
import home from "./home";
import about from "./about";
import "./index.css";

const content = document.querySelector("#content");
let homeButton;
let aboutButton;
let bookButton;
let menuButton;
let buttons;

nav(content);
refreshNav();
home(content);

function refreshNav() {
    homeButton = document.querySelector("#home-button");
    aboutButton = document.querySelector("#about-button");
    bookButton = document.querySelector("#book-button");
    menuButton = document.querySelector("#menu-button");
    buttons = [homeButton, aboutButton, bookButton, menuButton];
    
    homeButton.onclick = function() {
        refreshPage();
        homeButton.className = "nav-focused";
        home(content);
    };
    aboutButton.onclick = function() {
        refreshPage();
        aboutButton.className = "nav-focused";
        about(content);
    };
    bookButton.onclick = function() {
        refreshPage();
        bookButton.className = "nav-focused";
    };
    menuButton.onclick = function() {
        refreshPage();
        menuButton.className = "nav-focused";
    };
};

function refreshPage() {
    content.innerHTML = "";
    nav(content);
    refreshNav();
};

console.log("Hello world!");