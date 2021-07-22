function home(content) {
    let wrapper = document.createElement("div");
    let splashcontainer = document.createElement("div");
    wrapper.id = "home-wrapper";
    splashcontainer.id = "splash-container";
    
    let logo = document.createElement("h1");
    let subheading = document.createElement("h3");
    let menubutton = document.createElement("button");
    menubutton.id = "menu-button";
    menubutton.innerHTML = "MENU";
    logo.innerHTML = "Generic Restaurant";
    subheading.innerHTML = "The finest of generic gourmet dishes";
    splashcontainer.appendChild(logo);
    splashcontainer.appendChild(subheading);
    splashcontainer.appendChild(menubutton);
    wrapper.appendChild(splashcontainer);
    content.appendChild(wrapper);
};

export default home