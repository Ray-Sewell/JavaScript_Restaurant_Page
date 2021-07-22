function book(content) {
    let wrapper = document.createElement("div");
    let splashcontainer = document.createElement("div");
    wrapper.id = "book-wrapper";
    wrapper.className = "wrapper";
    splashcontainer.id = "splash-container";
    
    let heading = document.createElement("h1");
    let subheading = document.createElement("h3");
    let aboutcolumn = document.createElement("p");
    heading.innerHTML = "Booking";
    subheading.innerHTML = "Open 15:00 - 21:00 Tue - Sun";
    aboutcolumn.innerHTML = "For bookings please contact +44 1632 960445, walk-ins subject to availability.";
    splashcontainer.appendChild(heading);
    splashcontainer.appendChild(subheading);
    splashcontainer.appendChild(aboutcolumn);
    wrapper.appendChild(splashcontainer);
    content.appendChild(wrapper);
};

export default book