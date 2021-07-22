function about(content) {
    let wrapper = document.createElement("div");
    let splashcontainer = document.createElement("div");
    wrapper.id = "about-wrapper";
    wrapper.className = "wrapper";
    splashcontainer.id = "splash-container";
    
    let logo = document.createElement("h1");
    let subheading = document.createElement("h3");
    let aboutcolumn = document.createElement("p");
    logo.innerHTML = "EST. 1948";
    subheading.innerHTML = "Capital city";
    aboutcolumn.innerHTML = "A family run restaurant in the heart of Capital city. With over 240 years of experience in our kitchens Generic Restaurant will provide you with an unforgettable experience. All your favorite generic cuisine is served along with a large selection of vintage wines.";
    splashcontainer.appendChild(logo);
    splashcontainer.appendChild(subheading);
    splashcontainer.appendChild(aboutcolumn);
    wrapper.appendChild(splashcontainer);
    content.appendChild(wrapper);
};

export default about