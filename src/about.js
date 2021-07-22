function about(content) {
    let wrapper = document.createElement("div");
    let splashcontainer = document.createElement("div");
    wrapper.id = "about-wrapper";
    wrapper.className = "wrapper";
    splashcontainer.id = "splash-container";
    
    let logo = document.createElement("h1");
    let subheading = document.createElement("h3");
    logo.innerHTML = "EST. 1948";
    subheading.innerHTML = "Capital city";
    splashcontainer.appendChild(logo);
    splashcontainer.appendChild(subheading);
    wrapper.appendChild(splashcontainer);
    content.appendChild(wrapper);
};

export default about