class Menu {
    constructor() {
        this.dishes = [];
        this.filters = [];
    }

    addDish(dish) {
        this.dishes.push(dish);
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    showDishes(container) {

        this.dishes.forEach(dish => {
            container.innerHTML += dish.initHtml();
        });
    }


    showDishesFilter() {
        for (let i = 0; i <= this.filters; i++) {
            let filter = filters[i];
            let canShow = this.

        }
    }
}

class Dish {
    constructor(tag, image, title, price) {
        this.tag = tag;
        this.image = image;
        this.title = title;
        this.price = price;

    }

    initHtml() {
        return `<article id="article" class="${this.tag} article col my-box">
                    <img src="${this.image}" alt="">
                    <div class="item">
                        <header class="contenitore">
                            <h4>${this.title}</h4>
                            <h5 class="price">${this.price}</h5>
                        </header>   
                    </div>
                </article>`;
    }


    isFilterPassed(filter) {
        if (this.tag != filter.tag) {
            return false;
        }

        return true;
    }

}

class Filter {
    constructor(tag) {
        this.tag = tag;
    }

}

async function getMenu() {
    let response = await fetch("file.json");
    let dishes = await response.json();


    dishes.forEach(dish => {

        menu.addDish(new Dish(dish.tag, dish.image, dish.title, dish.price));

    });


    menu.showDishes(node);

}

let menu = new Menu();

const node = document.getElementById("daje");


getMenu().then();