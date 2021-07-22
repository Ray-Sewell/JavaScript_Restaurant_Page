import about from "./about";

function nav(content) {
    let wrapper = document.createElement("div");
    wrapper.id = "nav-wrapper";
    let navstart = document.createElement("div");
    navstart.id = "nav-start";
    let logo = document.createElement("h1");
    logo.innerHTML = "GR";
    navstart.appendChild(logo);

    let navmain = document.createElement("div");
    navmain.id = "nav-main";
    let homebutton = document.createElement("div");
    let aboutbutton = document.createElement("div");
    let bookbutton = document.createElement("div");
    let menubutton = document.createElement("div");
    homebutton.innerHTML = "HOME";
    aboutbutton.innerHTML = "ABOUT";
    bookbutton.innerHTML = "BOOK";
    menubutton.innerHTML = "MENU";
    homebutton.className = "nav-button";
    aboutbutton.className = "nav-button";
    bookbutton.className = "nav-button";
    menubutton.className = "nav-button";
    homebutton.id = "home-button";
    aboutbutton.id = "about-button";
    bookbutton.id = "book-button";
    menubutton.id = "menu-button";
    navmain.appendChild(homebutton);
    navmain.appendChild(aboutbutton);
    navmain.appendChild(bookbutton);
    navmain.appendChild(menubutton);

    let navend = document.createElement("div");
    navend.id = "nav-end";

    wrapper.appendChild(navstart);
    wrapper.appendChild(navmain);
    wrapper.appendChild(navend);
    content.appendChild(wrapper);
};

export default nav