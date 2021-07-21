function home(content) {
    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    let logo = document.createElement("h1");
    logo.innerHTML = "Generic Restaurant";
    let subheading = document.createElement("h3");
    subheading.innerHTML = "The finest of generic gourmet dishes";
    wrapper.appendChild(logo);
    wrapper.appendChild(subheading);
    content.appendChild(wrapper);
};

export default home