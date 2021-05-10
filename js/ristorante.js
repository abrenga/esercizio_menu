class Menu {

    constructor() {
        this.dishes = [];
    }


    addDish(dish) {

        this.dishes.push(dish);
    }

    showDishes(container) {

        this.dishes.forEach(dish => {

            container.innerHTML += this.initHtml(dish);
        });

    }

    initHtml(item) {
        return `<article id="article" class="${item.tag} article col my-box">
                    <img src="${item.image}" alt="">
                    <div class="item-info">
                        <header class="contenitore">
                            <h4>${item.title}</h4>
                            <h5 class="price">${item.price}</h5>
                        </header>   
                    </div>
                </article>`;
    }



}

class Dish {
    constructor(image, title, price, tag) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.tag = tag;
    }

}

async function getMenu() {
    let response = await fetch("file.json");
    let dishes = await response.json();

    let menu = new Menu();
    dishes.forEach(dish => {

        menu.addDish(new Dish(dish.image, dish.title, dish.price, dish.tag));

    });


    menu.showDishes(node);

}



const node = document.getElementById("daje");

