import nav from "./nav";
import home from "./home";
import about from "./about";
import book from "./book";
import menu from "./menu";
import "./index.css";

const content = document.querySelector("#content");
let homeButton;
let aboutButton;
let bookButton;
let menuButton;

nav(content);
refreshNav();
home(content);

function refreshNav() {
    homeButton = document.querySelector("#home-button");
    aboutButton = document.querySelector("#about-button");
    bookButton = document.querySelector("#book-button");
    menuButton = document.querySelector("#menu-button");
    
    homeButton.onclick = function() {
        refreshPage();
        homeButton.className = "nav-focused";
        home(content);
        let homeMenuButton = document.querySelector("#home-menu-button");
        homeMenuButton.onclick = function() {
            refreshPage();
            menuButton.className = "nav-focused";
            menu(content);
        };
    };
    aboutButton.onclick = function() {
        refreshPage();
        aboutButton.className = "nav-focused";
        about(content);
    };
    bookButton.onclick = function() {
        refreshPage();
        bookButton.className = "nav-focused";
        book(content);
    };
    menuButton.onclick = function() {
        refreshPage();
        menuButton.className = "nav-focused";
        menu(content);
    };
};

function refreshPage() {
    content.innerHTML = "";
    nav(content);
    refreshNav();
};