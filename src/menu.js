function menu(content) {
    let wrapper = document.createElement("div");
    let splashcontainer = document.createElement("div");
    wrapper.id = "menu-wrapper";
    wrapper.className = "wrapper";
    splashcontainer.id = "splash-container";
    
    let heading = document.createElement("h1");
    let subheading = document.createElement("h3");
    heading.innerHTML = "Menu";
    subheading.innerHTML = "Exactly what you expect";

    let menu = document.createElement("table");
    menu.id = "menu";
    menu.appendChild(addToMenu("Garlic Bread with Mozzarella", "£4"));
    menu.appendChild(addToMenu("N'duja & Cheese Dough Bites", "£3.50"));
    menu.appendChild(addToMenu("Antipasti Classico", "£6"));
    menu.appendChild(addToMenu("Caprina  Pizza", "£10.50"));
    menu.appendChild(addToMenu("Calzone Pollo", "£8.50"));
    menu.appendChild(addToMenu("Grande Lasagne", "£9.50"));
    menu.appendChild(addToMenu("Penne al Manzo Piccante", "£10.50"));
    menu.appendChild(addToMenu("Fettuccine Bolognese", "£9.50"));
    menu.appendChild(addToMenu("Salmon Nicoise Salad", "£7.50"));

    splashcontainer.appendChild(heading);
    splashcontainer.appendChild(subheading);
    splashcontainer.appendChild(menu);
    wrapper.appendChild(splashcontainer);
    content.appendChild(wrapper);
};

function addToMenu(food, price) {
    let tr = document.createElement("tr");
    let foodtd = document.createElement("td");
    let pricetd = document.createElement("td");
    foodtd.innerHTML = food;
    pricetd.innerHTML = price;
    tr.appendChild(foodtd);
    tr.appendChild(pricetd);
    return tr;
};

export default menu