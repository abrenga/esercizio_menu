class Menu {

    constructor() {
        this.dishes = [];
    }

    addDishes(dish) {
        this.dishes.push(dish);
    }


    showMenu(container) {

        container.innerHtml = "";

        container.innerHtml =+ Menu.creaPiattoHTML(dish);

    }
    
    creaPiattoHTML(dish){
        return `<article id="article" class="${dish.tag} article col-6 my-box">
                    <img src="${dish.image}" alt="">
                    <div class="item-info">
                        <header class="contenitore">
                            <h4>${dish.title}</h4>
                            <h5 class="price">${dish.price}</h5>
                        </header>
                        <p class="text">${dish.text}</p>
                    </div>
                </article>`;

    }

}



class Dish {
    constructor(image, title, price, tag) {
        this.image = image,
            this.title = title,
            this.price = price,
            this.tag = tag
    }


}



async function getMenu() {
    let response = await fetch("file.json");
    let dishes = await response.json();

    let menu = new Menu;

    dishes.forEach(dish => {

        menu.addDishes(new Dish(dish.image, dish.title, dish.price, dish.tag));

    });

    
    menu.showMenu(container);

}


let container = document.getElementById("container")

getMenu().then();

